package ee.mcdimus.petstore.service;

import com.nortal.digigov.dao.PersonBirthDataRepository;
import com.nortal.digigov.dao.PersonRepository;
import com.nortal.digigov.model.Sex;
import com.nortal.digigov.model.dto.BirthRegistrationDto;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.mockito.junit.jupiter.MockitoSettings;
import org.mockito.quality.Strictness;

import java.time.LocalDate;
import java.time.LocalDateTime;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
@MockitoSettings(strictness = Strictness.LENIENT)
class BirthRegistrationServiceTest {

  @Mock
  private PersonService personService;
  @Mock
  private PersonRepository personRepository;
  @Mock
  private PersonBirthDataRepository birthDataRepository;

  @InjectMocks
  private BirthRegistrationService birthRegistrationService;

  @Test
  void generateCode_StartsWith7_IfMale() {
    // given
    BirthRegistrationDto birthRegistrationDto = BirthRegistrationDto.builder()
        .sex(Sex.MALE)
        .date(LocalDateTime.parse("2012-11-14T15:16:17"))
        .build();

    // when
    String result = birthRegistrationService.generateCode(birthRegistrationDto);

    // then
    assertThat(result).startsWith("7");
  }

  @Test
  void generateCode_StartsWith8_IfFemale() {
    // given
    BirthRegistrationDto birthRegistrationDto = BirthRegistrationDto.builder()
        .sex(Sex.FEMALE)
        .date(LocalDateTime.parse("2012-11-14T15:16:17"))
        .build();

    // when
    String result = birthRegistrationService.generateCode(birthRegistrationDto);

    // then
    assertThat(result).startsWith("8");
  }

  @Test
  void generateCode_ContainsGivenDateWithoutPadding_IfTwoDigitsInDayAndMonth() {
    // given
    BirthRegistrationDto birthRegistrationDto = BirthRegistrationDto.builder()
        .sex(Sex.MALE)
        .date(LocalDateTime.parse("2012-11-14T15:16:17"))
        .build();

    // when
    String result = birthRegistrationService.generateCode(birthRegistrationDto);

    // then
    assertThat(result).startsWith("7121114");
  }

  @Test
  void generateCode_ContainsGivenDateWithPadding_IfOneDigitInDayAndMonth() {
    // given
    BirthRegistrationDto birthRegistrationDto = BirthRegistrationDto.builder()
        .sex(Sex.MALE)
        .date(LocalDateTime.parse("2012-01-02T15:16:17"))
        .build();

    // when
    String result = birthRegistrationService.generateCode(birthRegistrationDto);

    // then
    assertThat(result).startsWith("7120102");
  }

  @Test
  void generateCode_ContainsHospitalCodeWithPadding_IfOneDigitInCode() {
    // given
    BirthRegistrationDto birthRegistrationDto = BirthRegistrationDto.builder()
        .sex(Sex.MALE)
        .date(LocalDateTime.parse("2012-01-02T15:16:17"))
        .build();

    when(personService.countByBirthday(LocalDate.parse("2012-01-02"))).thenReturn(2);

    // when
    String result = birthRegistrationService.generateCode(birthRegistrationDto);

    // then
    assertThat(result).startsWith("7120102002");
  }

  @Test
  void generateCode_ContainsHospitalCodeWithoutPadding_IfThreeDigitsInCode() {
    // given
    BirthRegistrationDto birthRegistrationDto = BirthRegistrationDto.builder()
        .sex(Sex.MALE)
        .date(LocalDateTime.parse("2012-01-02T15:16:17"))
        .build();

    when(personService.countByBirthday(LocalDate.parse("2012-01-02"))).thenReturn(345);

    // when
    String result = birthRegistrationService.generateCode(birthRegistrationDto);

    // then
    assertThat(result).startsWith("7120102345");
  }

  @Test
  void generateCode_HasCalculatedChecksum() {
    // given
    BirthRegistrationDto birthRegistrationDto = BirthRegistrationDto.builder()
        .sex(Sex.MALE)
        .date(LocalDateTime.parse("2012-01-02T15:16:17"))
        .build();

    when(personService.countByBirthday(LocalDate.parse("2012-01-02"))).thenReturn(345);

    // when
    String result = birthRegistrationService.generateCode(birthRegistrationDto);

    // then
    assertThat(result).isEqualTo("71201023450");
  }

}
