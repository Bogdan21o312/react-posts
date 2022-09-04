import React from "react";
import MySelect from "./UI/select/MySelect";
import MyInput from "./UI/input/Myinput";

const PostFilter = ({filter, setFilter}) => {

    return (
        <div>
            <MyInput
                value={filter.query}
                onChange={e => setFilter({...filter, query:  e.target.value})}
                placeholder="Serch..."
            />
            <MySelect
                value={filter.sort}
                onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
                defaultValue="Sorting"
                options={[
                    { value: 'title', name: 'Title' },
                    { value: 'body', name: 'Text' },
                ]}
            />
        </div>
    )

}

export default PostFilter;