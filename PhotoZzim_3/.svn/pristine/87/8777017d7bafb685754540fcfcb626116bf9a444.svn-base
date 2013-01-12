package vo;

import java.io.Serializable;

public class Group  implements Serializable {
	private static final long serialVersionUID = 1297757339966241407L;
	private int gId;
	private String gName;
	private String uId;
	private String pId;
	
	public int getgId() {
		return gId;
	}
	public Group setgId(int gId) {
		this.gId = gId;
		return this;
	}
	public String getgName() {
		return gName;
	}
	public Group setgName(String gName) {
		this.gName = gName;
		return this;
	}
	public String getuId() {
		return uId;
	}
	public Group setuId(String uId) {
		this.uId = uId;
		return this;
	}
	public String getpId() {
		return pId;
	}
	public Group setpId(String pId) {
		this.pId = pId;
		return this;
	}
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + gId;
		result = prime * result + ((gName == null) ? 0 : gName.hashCode());
		result = prime * result + ((pId == null) ? 0 : pId.hashCode());
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
		Group other = (Group) obj;
		if (gId != other.gId)
			return false;
		if (gName == null) {
			if (other.gName != null)
				return false;
		} else if (!gName.equals(other.gName))
			return false;
		if (pId == null) {
			if (other.pId != null)
				return false;
		} else if (!pId.equals(other.pId))
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
		return "Group [gId=" + gId + ", gName=" + gName + ", uId=" + uId
				+ ", pId=" + pId + "]";
	}
	
	
	
	
}
