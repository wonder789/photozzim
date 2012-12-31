package vo;

public class Student implements java.io.Serializable {
	private static final long serialVersionUID = 2012100801L;

	private int 	no;
	private String 	name;
	private String 	tel;
	private String 	address;
	private int		age;
	private boolean	working;
	
	// default 생성자
	// 해당 클래스에 생성자가 없으면 
	// 컴파일러가 자동으로 기본 생성자를 만들어 준다.
	public Student() {}
	
	public Student(
			String name, String tel, String address, 
			int age, boolean working) {
		this.name = name;
		this.tel = tel;
		this.address = address;
		this.age = age;
		this.working = working;
	}
	
	public Student(String csv) {
		if (csv != null) {
			String[] values = csv.split(",");
			for(int i = 0; i < values.length; i++) {
				switch(i) {
				case 0: this.name = values[0]; break;
				case 1: this.tel = values[1]; break;
				case 2: this.address = values[2]; break;
				case 3: this.age = Integer.parseInt(values[3]); break;
				case 4: this.working = Boolean.parseBoolean(values[4]); break;
				}
			}
		}
	}
	
	
	
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((address == null) ? 0 : address.hashCode());
		result = prime * result + age;
		result = prime * result + ((name == null) ? 0 : name.hashCode());
		result = prime * result + no;
		result = prime * result + ((tel == null) ? 0 : tel.hashCode());
		result = prime * result + (working ? 1231 : 1237);
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
		Student other = (Student) obj;
		if (address == null) {
			if (other.address != null)
				return false;
		} else if (!address.equals(other.address))
			return false;
		if (age != other.age)
			return false;
		if (name == null) {
			if (other.name != null)
				return false;
		} else if (!name.equals(other.name))
			return false;
		if (no != other.no)
			return false;
		if (tel == null) {
			if (other.tel != null)
				return false;
		} else if (!tel.equals(other.tel))
			return false;
		if (working != other.working)
			return false;
		return true;
	}

	@Override
	public String toString() {
		return no + "," + name + "," + tel + "," + address + "," + 
				age + "," + working;
	}

	public Student setName(String name) {
		this.name = name;
		return this;
	}
	public Student setTel(String tel) {
		this.tel = tel;
		return this;
	}
	public Student setAddress(String address) {
		this.address = address;
		return this;
	}
	public Student setAge(int age) {
		if (age > 0 && age < 120)
			this.age = age;
		else
			this.age = 18;
	
		return this;
	}
	public Student setWorking(boolean working) {
		this.working = working;
		return this;
	}
	
	public String getName() {
		return name;
	}
	public String getTel() {
		return tel;
	}
	public String getAddress() {
		return address;
	}
	public int getAge() {
		return age;
	}
	public boolean isWorking() {
		return working;
	}

	public int getNo() {
		return no;
	}

	public Student setNo(int no) {
		this.no = no;
		return this;
	}
	
}

















