import React from 'react'
import FlexColumn from '../../ui/FlexColumn'
import Section from '../../ui/Section'
import classes from "../../css/mallsList/Body.module.css";
import FlexRow from '../../ui/FlexRow';

const Body = () => {
    return (
        <Section className={classes.container}>
            <FlexColumn fullSize>
                <div style={{ padding: "3rem 0" }}>
                    <h1 className={classes.title}>Malls</h1>
                    <p className={classes.subtitle}>Tel-Aviv</p>
                </div>
                <FlexRow justifyBetween>
                    {/* Mall List + Display Options + Ordering Options */}
                    <FlexColumn fullSize className={classes.left}>
                        <FlexRow justifyBetween>
                            <div>
                                <span>display1</span>
                                <span>display2</span>
                            </div>
                            <div>
                                dropdown order filter
                            </div>
                        </FlexRow>
                        <div>
                            Mall1
                        </div>
                        <div>
                            Mall2
                        </div>
                    </FlexColumn>
                    <FlexColumn fullSize className={classes.mid} />
                    {/* Filters */}
                    <FlexColumn fullSize className={classes.right}>
                        <div>
                            Filters
                        </div>
                        <button>
                            Update
                        </button>
                    </FlexColumn>
                </FlexRow>
            </FlexColumn >
        </Section >
    )
}

export default Body