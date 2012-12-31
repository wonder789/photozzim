package vo;

import java.io.Serializable;

public class GroupUser implements Serializable {
	private static final long serialVersionUID = -8995392193754415371L;
	public static final Boolean ACCEPT = true;
	public static final Boolean NO_ACCEPT = false;
	private int gUid;
	private int gId;
	private String uId;
	private boolean gPs;
	
	public int getgUid() {
		return gUid;
	}
	public GroupUser setgUid(int gUid) {
		this.gUid = gUid;
		return this;
	}
	public int getgId() {
		return gId;
	}
	public GroupUser setgId(int gId) {
		this.gId = gId;
		return this;
	}
	public String getuId() {
		return uId;
	}
	public GroupUser setuId(String uId) {
		this.uId = uId;
		return this;
	}
	public boolean isgPs() {
		return gPs;
	}
	public GroupUser setgPs(boolean gPs) {
		this.gPs = gPs;
		return this;
	}
	
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + gId;
		result = prime * result + (gPs ? 1231 : 1237);
		result = prime * result + gUid;
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
		GroupUser other = (GroupUser) obj;
		if (gId != other.gId)
			return false;
		if (gPs != other.gPs)
			return false;
		if (gUid != other.gUid)
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
		return "GroupUser [gUid=" + gUid + ", gId=" + gId + ", uId=" + uId
				+ ", gPs=" + gPs + "]";
	}
	
}
