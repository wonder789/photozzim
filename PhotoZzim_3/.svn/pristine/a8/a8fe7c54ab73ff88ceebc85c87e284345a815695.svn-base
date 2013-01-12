package vo;

import java.io.Serializable;

public class GroupPhoto implements Serializable {
	private static final long serialVersionUID = 5071755662431625819L;
	private int gPid;
	private int zId;
	private int gId;
	
	public int getgPid() {
		return gPid;
	}
	public GroupPhoto setgPid(int gPid) {
		this.gPid = gPid;
		return this;
	}
	public int getzId() {
		return zId;
	}
	public GroupPhoto setzId(int zId) {
		this.zId = zId;
		return this;
	}
	public int getgId() {
		return gId;
	}
	public GroupPhoto setgId(int gId) {
		this.gId = gId;
		return this;
	}
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + gId;
		result = prime * result + gPid;
		result = prime * result + zId;
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
		GroupPhoto other = (GroupPhoto) obj;
		if (gId != other.gId)
			return false;
		if (gPid != other.gPid)
			return false;
		if (zId != other.zId)
			return false;
		return true;
	}
	@Override
	public String toString() {
		return "GroupPhoto [gPid=" + gPid + ", zId=" + zId + ", gId=" + gId
				+ "]";
	}
	
	
	
	
}
