export { person, EducationInfo, eduHandler, expHandler };
import { v4 as uuidv4 } from "uuid";

class EducationInfo {
  constructor() {
    this.id = uuidv4();
    this.school = "";
    this.degree = "";
    this.startDate = "";
    this.endDate = "";
    this.location = "";
  }
}

class EducationHandler {
  constructor() {
    this.educationArr = [];
    this.currentIndex = 2;
  }

  increaseIndex = () => (this.currentIndex = this.currentIndex + 1);

  returnObj = () => {
    if (this.educationArr.length < this.currentIndex) {
      const newObj = new EducationInfo();
      this.educationArr.push(newObj);
      return newObj;
    }

    return this.educationArr[this.educationArr.length - 1];
  };

  findObj = (id) => {
    const index = this.educationArr.findIndex((element) => element.id === id);
    return this.educationArr[index];
  };

  deleteObj = (id) => {
    const index = this.educationArr.findIndex((element) => element.id === id);
    this.educationArr.splice(index, 1);
    this.currentIndex = this.currentIndex - 1;
  };
}

const ids = [uuidv4(), uuidv4()];

const eduHandler = new EducationHandler();

eduHandler.educationArr.push({
  id: ids[0],
  school: "MIT ",
  degree: "Bachelors",
  startDate: "01-2-2003",
  endDate: "02-2-2005",
  location: "New York",
});
eduHandler.educationArr.push({
  id: ids[1],
  school: "New York University",
  degree: "Masters",
  startDate: "02-5-2003",
  endDate: "01-6-2009",
  location: "New York, Usa",
});

//person
const person = {
  name: "",
  email: "",
  phone: "",
  location: "",
};

// experience

class ExperienceInfo {
  constructor() {
    this.id = uuidv4();
    this.company = "";
    this.startDate = "";
    this.endDate = "";
    this.position = "";
    this.location = "";
    this.description = "";
  }
}

class ExperienceHandler {
  constructor() {
    this.experienceArr = [];
    this.currentIndex = 2;
  }

  increaseIndex = () => (this.currentIndex = this.currentIndex + 1);

  returnObj = () => {
    if (this.experienceArr.length < this.currentIndex) {
      const newObj = new ExperienceInfo();
      this.experienceArr.push(newObj);
      return newObj;
    }

    return this.experienceArr[this.experienceArr.length - 1];
  };

  findObj = (id) => {
    const index = this.experienceArr.findIndex((element) => element.id === id);
    return this.experienceArr[index];
  };

  deleteObj = (id) => {
    const index = this.experienceArr.findIndex((element) => element.id === id);
    this.experienceArr.splice(index, 1);
    this.currentIndex = this.currentIndex - 1;
  };
}
const expHandler = new ExperienceHandler();

expHandler.experienceArr.push({
  id: ids[1],
  company: "Stark Enterprises",
  position: "Ux Designer",
  startDate: "02-08-2005",
  endDate: "05-09-2024",
  location: "New York, USA",
  description:
    "Designed and prototyped user interface patterns for various clients in various industries, ranging from self-service apps within the telecommunications-sector to mobile games for IOS and Android",
});

expHandler.experienceArr.push({
  id: ids[0],
  company: "Wayne Crops",
  position: "Ux Designer",
  startDate: "02-08-2005",
  endDate: "05-09-2024",
  location: "New York, USA",
  description:
    "Designed and prototyped user interface patterns for various clients in various industries, ranging from self-service apps within the telecommunications-sector to mobile games for IOS and Android",
});
