package ee.mcdimus.petstore.model.exceptions;

import java.util.List;

/**
 * Created by Nicholas Azar on March 06, 2017.
 */
public class BaseException extends Exception {
    List<ResponseError> errors;
}
