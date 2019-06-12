package ee.mcdimus.petstore;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;
import org.springframework.context.annotation.Bean;
import org.springframework.http.ResponseEntity;
import springfox.documentation.builders.ApiInfoBuilder;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

import java.time.Clock;

@EnableSwagger2
@SpringBootApplication
public class DemoApplication extends SpringBootServletInitializer {

  @Bean
  Docket apiSwaggerDocket() {
    return new Docket(DocumentationType.SWAGGER_2)
        .select()
        .apis(RequestHandlerSelectors.basePackage("ee.mcdimus.petstore"))
        .paths(PathSelectors.any())
        .build()
        .genericModelSubstitutes(ResponseEntity.class)
        .useDefaultResponseMessages(false)
        .apiInfo(new ApiInfoBuilder()
            .title("Petstore")
            .version("0.1")
            .build());
  }

  @Bean
  Clock provideClock() {
    return Clock.systemDefaultZone();
  }

  public static void main(String[] args) {
    SpringApplication.run(DemoApplication.class, args);
  }

}
