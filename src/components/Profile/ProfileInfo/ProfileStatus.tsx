import React, {ChangeEvent, Component} from "react";
import {ProfileType} from "../../../redux/profile-reducer";

type ProfileStatusType = {
    status: string,
    updateStatus: (status: string) => void
}

export class ProfileStatus extends Component<ProfileStatusType> {

    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status)
    }

    onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({status: e.currentTarget.value})
    }



    componentDidUpdate(prevProps: Readonly<ProfileStatusType>, prevState: Readonly<{}>) {
        if (prevProps.status !== this.props.status) {
            this.setState({status: this.props.status})
        }
    }

    render() {
        return (
            <>
                {!this.state.editMode &&
                <span onDoubleClick={this.activateEditMode}>{this.props.status || "-------"}</span>
                }
                {this.state.editMode &&
                <input autoFocus={true} onBlur={this.deactivateEditMode} value={this.state.status} type="text"
                       onChange={this.onStatusChange}/>
                }
            </>
        )
    }
}
