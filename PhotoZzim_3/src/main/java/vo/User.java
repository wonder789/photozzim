package vo;

public class User implements java.io.Serializable{

	private static final long serialVersionUID = 661200456899173531L;
	private String uId;
	private String uName;
	
	public String getuId() {
		return uId;
	}
	public User setuId(String uId) {
		this.uId = uId;
		return this;
	}
	
	public String getuName() {
		return uName;
	}
	public User setuName(String uName) {
		this.uName = uName;
		return this;
	}
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((uId == null) ? 0 : uId.hashCode());
		return result;
	}
	
	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		User other = (User) obj;
		if (uId == null) {
			if (other.uId != null)
				return false;
		} else if (!uId.equals(other.uId))
			return false;
		return true;
	}
	
	@Override
	public String toString() {
		return "User [uId=" + uId + "]";
	}
	
}	
