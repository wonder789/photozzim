package vo;

import java.io.Serializable;

public class Album implements Serializable{
	private static final long serialVersionUID = 3998009966007664591L;
	public static final Boolean ACCEPT = true;
	public static final Boolean NO_ACCEPT = false;
	private int aId;
	private String title;
	private String uId;
	private boolean aPs;
	private String aPid;
	private String apData;
	
	public String getaPid() {
		return aPid;
	}
	public Album setaPid(String aPid) {
		this.aPid = aPid;
		return this;
	}
	public String getApData() {
		return apData;
	}
	public Album setApData(String apData) {
		this.apData = apData;
		return this;
	}
	public int getaId() {
		return aId;
	}
	public Album setaId(int aId) {
		this.aId = aId;
		return this;
	}
	public String getTitle() {
		return title;
	}
	public Album setTitle(String title) {
		this.title = title;
		return this;
	}
	public String getuId() {
		return uId;
	}
	public Album setuId(String uId) {
		this.uId = uId;
		return this;
	}
	public boolean isaPs() {
		return aPs;
	}
	public Album setaPs(boolean aPs) {
		this.aPs = aPs;
		return this;
	}
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + aId;
		result = prime * result + (aPs ? 1231 : 1237);
		result = prime * result + ((title == null) ? 0 : title.hashCode());
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
		Album other = (Album) obj;
		if (aId != other.aId)
			return false;
		if (aPs != other.aPs)
			return false;
		if (title == null) {
			if (other.title != null)
				return false;
		} else if (!title.equals(other.title))
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
		return "Album [aId=" + aId + ", title=" + title + ", uId=" + uId
				+ ", aPs=" + aPs + "]";
	}
	
	
}
