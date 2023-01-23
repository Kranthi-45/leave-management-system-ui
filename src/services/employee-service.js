import axios from "axios";

const POST_URL = 'http://localhost:8080/lms/emp/save-emp';
const GET_URL_EMP_ID = 'http://localhost:8080/lms/emp';
const  GET_URL_LEAVE_ID  = 'http://localhost:8080/lms/emp/leave-balance';
const  POST_URL_APPLY_LEAVE = "http://localhost:8080/lms/emp/apply-leave";
class EmployeeService {

  saveEmployee(empData) {
    return axios.post(POST_URL,empData);
  }

  getEmployeeById(empId){
    return axios.get(GET_URL_EMP_ID + "/" + empId);
  }

  getLeavesById(empId){
    return axios.get(GET_URL_LEAVE_ID + "/" + empId);
  }

  applyLeave(leaveData){
    return axios.post(POST_URL_APPLY_LEAVE + "?days=" + leaveData.days + "&empid=" + leaveData.empId + "&type=" + leaveData.type);
  }
}
// eslint-disable-next-line import/no-anonymous-default-export
export default new EmployeeService();