import FlexColumn from "../../ui/FlexColumn";
import FlexRow from "../../ui/FlexRow";
import { InputWrapper } from "../../ui/InputWrapper";

const Guest = props =>{
    return(
        <InputWrapper
        icon={props.icon}
        mainDiv={props.mainDiv}
      >
        <FlexColumn>
            <h4>1 Guest</h4>
            <p>Click to add more</p>
        </FlexColumn>
        </InputWrapper>
    )
}

export default Guest;