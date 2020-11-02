import React from 'react';
import TaskItem from './TaskItem'

class TaskList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          //dùng làm chức năng lọc  
          filterName: '',
          filterStatus: -1 // -1 all, 1 active, 0 de_active
        }
    }

    onChange = event => {
      let target = event.target;
      let name = target.name;
      let value = target.value;
      this.props.onFilter(
        name === 'filterName' ? value : this.state.filterName,
        name === 'filterStatus' ? value : this.state.filterStatus
      )
      this.setState({
        [name]: value
      })
    }

    render() { 
      let { tasks } = this.props; // let tasks = this.props.tasks
      let { filterName, filterStatus } = this.state
      let elements = tasks.map((task, index) => {
        return <TaskItem key= { task.id }
                         index= { index }
                         task={task}
                         onUpdateStatus = { this.props.onUpdateStatus }
                         onDeleteTask = { this.props.onDeleteTask }
                         onUpdate = { this.props.onUpdate }
                  />
      })


        return (  
            <table className="table table-bordered table-hover">
                <thead>
                    <tr>
                      <th className="text-center">STT</th>
                      <th className="text-center">Tên</th>
                      <th className="text-center">Trạng Thái</th>
                      <th className="text-center">Hành Động</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                      <td />
                      <td>
                        <input 
                              type="text" 
                              className="form-control" 
                              // Phải đặt trùng với state
                              name="filterName"
                              value= { filterName }
                              onChange= { this.onChange }
                              />
                      </td>
                      <td>
                        <select 
                              className="form-control"
                              name="filterStatus"
                              value= { filterStatus }
                              onChange= { this.onChange }
                              >
                          <option value={-1}>Tất Cả</option>
                          <option value={0}>Ẩn</option>
                          <option value={1}>Kích Hoạt</option>
                        </select>
                      </td>
                      <td />
                    </tr>
                    { elements }
                </tbody>
            </table>
        );
    }
}
 
export default TaskList;