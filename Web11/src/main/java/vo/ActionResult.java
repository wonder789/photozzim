package vo;

import java.io.Serializable;

public class ActionResult implements Serializable{
	private static final long serialVersionUID = 1472083211736473280L;
	
	public static final int SUCCESS = 200;
	public static final int FAILURE = 400;
	
	private Object 			data;
	private int 			status;
	public Object getData() {
		return data;
	}
	public ActionResult setData(Object data) {
		this.data = data;
		return this;
	}
	public int getStatus() {
		return status;
	}
	public ActionResult setStatus(int status) {
		this.status = status;
		return this;
	}
	
	
}
