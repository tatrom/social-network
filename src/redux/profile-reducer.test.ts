import profileReducer, {addPost, deletePost} from "./profile-reducer";


it('new post should be added', () => {
    // 1.Test data
    let action = addPost('it-kamasutra.com')
    let state = {
        posts: [
            {id: 1, message: "Its a first post", likesCount: 3},
            {id: 2, message: "Its a second post", likesCount: 3},
            {id: 3, message: "Its a third post", likesCount: 3},
            {id: 4, message: "Its a fourth post", likesCount: 3},
            {id: 5, message: "Its a fifth post", likesCount: 3},
        ],
        newText: "",
        profile: null,
        status: ""
    }
    let newState = profileReducer(state, action)
    //expectation
    expect(newState.posts.length).toBe(6);
    expect(newState.posts[5].message).toBe('it-kamasutra.com');
})

it('Correct message should be added', () => {
    // 1.Test data
    let action = addPost('it-kamasutra.com')
    let state = {
        posts: [
            {id: 1, message: "Its a first post", likesCount: 3},
            {id: 2, message: "Its a second post", likesCount: 3},
            {id: 3, message: "Its a third post", likesCount: 3},
            {id: 4, message: "Its a fourth post", likesCount: 3},
            {id: 5, message: "Its a fifth post", likesCount: 3},
        ],
        newText: "",
        profile: null,
        status: ""
    }
    let newState = profileReducer(state, action)
    //expectation
    expect(newState.posts.length).toBe(6);
    expect(newState.posts[5].message).toBe('it-kamasutra.com');
})

it('After deleting message length on message array should be decrement', () => {
    // 1.Test data
    let action = deletePost(6)
    let state = {
        posts: [
            {id: 1, message: "Its a first post", likesCount: 3},
            {id: 2, message: "Its a second post", likesCount: 3},
            {id: 3, message: "Its a third post", likesCount: 3},
            {id: 4, message: "Its a fourth post", likesCount: 3},
            {id: 5, message: "Its a fifth post", likesCount: 3},
        ],
        newText: "",
        profile: null,
        status: ""
    }
    let newState = profileReducer(state, action)
    //expectation
    expect(newState.posts.length).toBe(5)
})
