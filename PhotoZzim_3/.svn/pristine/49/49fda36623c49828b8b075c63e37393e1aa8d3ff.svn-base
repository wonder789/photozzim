package vo;

import java.io.Serializable;

public class Friend implements Serializable {
	private static final long serialVersionUID = 3005734654018820741L;
	public static final Boolean ACCEPT = true;
	public static final Boolean NO_ACCEPT = false;
	private String uId;
	private String fId;
	private boolean fPs;
	
	public String getuId() {
		return uId;
	}
	public Friend setuId(String uId) {
		this.uId = uId;
		return this;
	}
	public String getfId() {
		return fId;
	}
	public Friend setfId(String fId) {
		this.fId = fId;
		return this;
	}
	public boolean isfPs() {
		return fPs;
	}
	public Friend setfPs(boolean fPs) {
		this.fPs = fPs;
		return this;
	}
	
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((fId == null) ? 0 : fId.hashCode());
		result = prime * result + (fPs ? 1231 : 1237);
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
		Friend other = (Friend) obj;
		if(fId == other.fId && uId == other.uId)
			return true;
		
		if (fId == null) {
			if (other.fId != null)
				return false;
		} else if (!fId.equals(other.fId))
			return false;
		if (fPs != other.fPs)
			return false;
		if (uId == null) {
			if (other.uId != null)
				return false;
		} else if (!uId.equals(other.uId))
			return false;
		return true;
	}
	
	@Override
	public String toString() {
		return "Friend [uId=" + uId + ", fId=" + fId + ", fPs=" + fPs + "]";
	}
	
	

}
