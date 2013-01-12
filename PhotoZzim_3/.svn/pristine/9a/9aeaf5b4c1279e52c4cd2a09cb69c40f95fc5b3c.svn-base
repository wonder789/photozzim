package vo;

import java.io.Serializable;

public class Photo implements Serializable {
	
	private static final long serialVersionUID = 8977790837914538378L;
	private String pId;
	private String pName;
	private String pDate;
	private String pPath;
	
	public String getpId() {
		return pId;
	}
	public Photo setpId(String pId) {
		this.pId = pId;
		return this;
	}
	public String getpName() {
		return pName;
	}
	public Photo setpName(String pName) {
		this.pName = pName;
		return this;
	}
	public String getpDate() {
		return pDate;
	}
	public Photo setpDate(String pDate) {
		this.pDate = pDate;
		return this;
	}
	public String getpPath() {
		return pPath;
	}
	public Photo setpPath(String pPath) {
		this.pPath = pPath;
		return this;
	}
	
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((pDate == null) ? 0 : pDate.hashCode());
		result = prime * result + ((pId == null) ? 0 : pId.hashCode());
		result = prime * result + ((pName == null) ? 0 : pName.hashCode());
		result = prime * result + ((pPath == null) ? 0 : pPath.hashCode());
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
		Photo other = (Photo) obj;
		if (pDate == null) {
			if (other.pDate != null)
				return false;
		} else if (!pDate.equals(other.pDate))
			return false;
		if (pId == null) {
			if (other.pId != null)
				return false;
		} else if (!pId.equals(other.pId))
			return false;
		if (pName == null) {
			if (other.pName != null)
				return false;
		} else if (!pName.equals(other.pName))
			return false;
		if (pPath == null) {
			if (other.pPath != null)
				return false;
		} else if (!pPath.equals(other.pPath))
			return false;
		return true;
	}
	@Override
	public String toString() {
		return "Photo [pId=" + pId + ", pName=" + pName + ", pDate=" + pDate
				+ ", pPath=" + pPath + "]";
	}
	
	
}
