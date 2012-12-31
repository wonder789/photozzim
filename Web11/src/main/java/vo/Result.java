package vo;

import java.io.Serializable;

public class Result implements Serializable{

	private static final long serialVersionUID = -1731919204722347549L;
	private String url;
	private String message;
	public String getUrl() {
		return url;
	}
	public Result setUrl(String url) {
		this.url = url;
		return this;
	}
	public String getMessage() {
		return message;
	}
	public Result setMessage(String message) {
		this.message = message;
		return this;
	}
	
	
}
