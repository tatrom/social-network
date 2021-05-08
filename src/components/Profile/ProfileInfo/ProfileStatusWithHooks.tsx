import React, {ChangeEvent, useEffect, useState} from "react";

type ProfileStatusType = {
    status: string,
    updateStatus: (status: string) => void
}

export const ProfileStatusWithHooks = (props: ProfileStatusType) => {

    const [editMode, setEditMode] = useState<boolean>(false)
    const [status, setStatus] = useState<string>(props.status)

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    const activateEditMode = () => {
        setEditMode(true)
    }
    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }

    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }
    return (
        <div>
            {!editMode &&
            <div>
                <b>Status: </b><span onClick={activateEditMode}>{props.status || "------"}</span>
            </div>
            }
            {editMode &&
            <div>
                <input onBlur={deactivateEditMode} autoFocus={true} onChange={onStatusChange} value={status}
                       type="text" onSubmit={deactivateEditMode}/>
            </div>
            }
        </div>
    )

}
