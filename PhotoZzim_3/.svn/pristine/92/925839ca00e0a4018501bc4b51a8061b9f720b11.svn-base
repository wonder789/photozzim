package vo;

import java.io.Serializable;

public class Zzim implements Serializable {
	private static final long serialVersionUID = 1L;
	public static final int PUBLIC = 0;
	public static final int PRIVATE = 1;
	private int zId;
	private String pId;
	private String uId;
	private boolean zPs;
	
	public int getzId() {
		return zId;
	}
	public Zzim setzId(int zId) {
		this.zId = zId;
		return this;
	}
	public String getpId() {
		return pId;
	}
	public Zzim setpId(String pId) {
		this.pId = pId;
		return this;
	}
	public String getuId() {
		return uId;
	}
	public Zzim setuId(String uId) {
		this.uId = uId;
		return this;
	}
	public boolean iszPs() {
		return zPs;
	}
	public Zzim setzPs(boolean zPs) {
		this.zPs = zPs;
		return this;
	}
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((pId == null) ? 0 : pId.hashCode());
		result = prime * result + ((uId == null) ? 0 : uId.hashCode());
		result = prime * result + zId;
		result = prime * result + (zPs ? 1231 : 1237);
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
		Zzim other = (Zzim) obj;
		if(pId.equals(other.pId) && !uId.equals(other.uId) ){
			return  true;
		}
		
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
		if (zId != other.zId)
			return false;
		if (zPs != other.zPs)
			return false;
		
		return false;
	}
	@Override
	public String toString() {
		return "Zzim [zId=" + zId + ", pId=" + pId + ", uId=" + uId + ", zPs="
				+ zPs + "]";
	}
	
	
	
}
