
interface Course{
  name: string;
  duration?: number; //ponto de interrogação torna opicional
  educator: string;
}

class CreateCourseService{
  execute({duration, educator, name}: Course){
    console.log(name, duration, educator);
  }
}

export default new CreateCourseService();