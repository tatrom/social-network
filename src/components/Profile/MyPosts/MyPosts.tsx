import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import './MyPosts.module.css';
import {PostType} from "../../../redux/messages-reducer";
import {InjectedFormProps, Field, reduxForm} from "redux-form";
import {Textarea} from "../../common/FormsControls/FormsControls";
import {maxLengthCreator, requiredField} from "../../../Utils/Validators/validators";

type MyPostsType = {
    posts: Array<PostType>
    value: string
    addPost: (text: string) => void
}
type FormDataType = {
    newPostBody: string
}

const maxLength100 = maxLengthCreator(100)

function MyPosts(props: MyPostsType) {
    let postsElements = props.posts.map((p, id) => <Post key={id} message={p.message} likeCounter={p.likesCount}/>);
    let newPostElement = React.createRef<HTMLTextAreaElement>();

    let onAddPost = (values: FormDataType) => {
        if (values) {
            props.addPost(values.newPostBody);
        }

    }

    return <div className={s.postsBlock}>
        <div>
            <h3>My posts</h3>
        </div>
        <AddPostFormRedux onSubmit={onAddPost}/>

        <div className={"s.posts"}>
            {postsElements}
        </div>
    </div>
}

const AddPostForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={'newPostBody'} component={Textarea} placeholder={'Enter your post text'}
                       validate={[requiredField, maxLength100]}/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

const AddPostFormRedux = reduxForm<FormDataType>({
    form: 'profileAddPostForm'
})(AddPostForm)

export default MyPosts;