import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


class TaskItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }


    onUpdateStatus = () => {
        // console.log(this.props.task.id)
        this.props.onUpdateStatus(this.props.task.id);
    }

    onDeleteTask = () => {
        this.props.onDeleteTask(this.props.task.id);
    }
    //cập nhật dựa vào id nên truyền id vào
    onUpdate = () => {
        this.props.onUpdate(this.props.task.id);
    }
    Home() {
        return (
            <div>
                <h2>Chi tiet home</h2>
            </div>
        );
    }
    detail() {
        return (
            <ul>
                <li>
                    Tên CV: {this.props.task.name}
                    Trạng thái: {this.props.task.status}
                </li>
            </ul>
        );
    }
    render() {
        let { task, index } = this.props;

        return (
                <tr>
                    <td> </td> {/* Chứa ID của công việc tương ứng với cột STT */}
                    <td> </td> {/* Chứa nội dung của công việc tương ứng với cột Tên */}
                    <td className="text-center"></td> {/* Chứa trạng thái của công việc tương ứng với cột trạng thái */}
                    <td className="text-center">
                        <button type="button"
                            className="btn btn-warning text-white"
                            onClick={this.onUpdate}>
                            <i className="fa fa-edit mr-2"></i>Sửa
                </button>&nbsp;
                <button type="button" className="btn btn-danger" onClick={this.onDeleteTask}>
                            <i className="fa fa-trash mr-2"></i>Xóa
                </button>
                    </td>
                </tr>
        );
    }
}

export default TaskItem;