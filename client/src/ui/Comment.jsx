import React from 'react'
import classes from "../css/ui/Comment.module.css";
import FlexColumn from "./FlexColumn";
import FlexRow from "./FlexRow";
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';

const Comment = ({ comment }) => {
    return (
        <FlexColumn fullSize className={classes.container}>
            <FlexRow justifyBetween>
                <img src={comment.userLogo} alt="logo" className={classes.userLogo} />
                <FlexColumn className={classes.userDetails}>
                    <FlexColumn style={{ flex: 2 }}>
                        <span className={classes.user_name}>{comment.username}</span>
                        <span className={classes.user_createdAt}>{comment.createdAt}</span>
                        <p className={classes.user_description}>{comment.description}</p>
                    </FlexColumn>
                    <div style={{ flex: 1 }}>
                        {comment.img?.map((item) => {
                            return (
                                <img className={classes.img_item} key={comment._id} src={item.img} alt="img" />
                            )
                        })}
                        <div className={classes.likes}>
                            <ThumbUpOutlinedIcon className={classes.thumbup_icon} />
                            <p style={{ paddingLeft: "5px" }}>
                                {comment.likes}
                            </p>
                        </div>
                    </div>
                </FlexColumn>
                <p className={classes.stars}>{comment.stars}</p>
            </FlexRow>

            <hr />
        </FlexColumn>
    )
}

export default Comment