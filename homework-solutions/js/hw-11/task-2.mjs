class Employee {
  constructor(firstName, lastName, profession, salary){
    this._firstName = firstName;
    this._lastName = lastName;
    this._profession = profession;
    this._salary = salary;

  }

  get firstName() {
    return this._firstName;
  }
  set firstName(value) {
    if (typeof value !== "string" || value.length < 2 || value.length > 50 || !/^[a-zA-Z]+$/.test(value) ) throw new Error("Invalid firstName");
    this._firstName = value;
  }

  get lastName() {
    return this._lastName;
  }
  set lastName(value) {
    if (typeof value !== "string" || value.length < 2 || value.length > 50 || !/^[a-zA-Z]+$/.test(value) ) throw new Error("Invalid lastName");
    this._lastName = value;
  }

  get profession() {
    return this._profession;
  }
  set profession(value) {
    if (typeof value !== "string" || value.trim().length === 0 ||  !/^[a-zA-Z\s]+$/.test(value)) throw new Error("Invalid profession");
    this._profession = value;
  }

  get salary() {
    return this._salary;
  }
  set salary(value) {
    if (typeof value !== "number" || Number.isNaN(value) || value <= 0 || value >= 10000) throw new Error("Invalid salary");
    this._salary = value;
  }

}

class Company {
    #employees
  
    constructor(title, phone, address, employees){
      this._title = title;
      this._phone = phone;
      this._address = address;
      this.#employees = [];
    }
  
    get title() {
      return this._title;
    }
  
    get phone() {
      return this._phone;
    }
  
    get address() {
      return this._address;
    }
    
    addEmployee(employee){
      if (!(employee instanceof Employee)){
        throw new Error ('Error')
      }
      this.#employees.push(employee)
    }
  
    getEmployees(){
      return this.#employees
    }



    findEmployeeByName(firstName){
      const empl = this.#employees.find(el => el.firstName === firstName)
      if(!empl){
        throw new Error ('Invalid employee')
      }
      return empl
      }

    removeEmployee(firstName){const index = this.#employees.findIndex(empl => empl.firstName === firstName)
      if (index === -1){
        throw new Error ('Invalid employeer')
      }
      this.#employees.splice(index, 1);
    }


    getTotalSalary() {
    return this.#employees.reduce((sum, e) => sum + e.salary, 0);
  }
}

export { Employee, Company };
