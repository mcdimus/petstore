package ee.mcdimus.petstore.model;

import java.util.Date;

/**
 * Created by Nicholas Azar on March 06, 2017.
 */
public abstract class Auditable {
    private Date updateDttm;
    private Date createDttm;
    private String lastRequestId;
}
