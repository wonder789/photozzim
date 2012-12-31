package vo;

import java.io.Serializable;

public class ActionResult implements Serializable {
	private static final long serialVersionUID = -9057735337294217677L;

	public static final int SUCCESS = 200;
	public static final int FAILURE = 400;
	
	private int status;
	//error data
	private Object data;
	//error 안내 메시지  
	private String message;
	
	public int getStatus() {
		return status;
	}
	public ActionResult setStatus(int status) {
		this.status = status;
		return this;
	}
	public Object getData() {
		return data;
	}
	public ActionResult setData(Object data) {
		this.data = data;
		return this;
	}
	public String getMessage() {
		return message;
	}
	public ActionResult setMessage(String message) {
		this.message = message;
		return this;
	}
	
}







