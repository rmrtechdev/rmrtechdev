import { Animator, batch, StickyIn, FadeIn, ZoomIn, ScrollContainer, ScrollPage, MoveIn } from "react-scroll-motion";
import { Parallax } from 'react-scroll-parallax';

import SkillsRow from './SkillRow';



function Skillscroll() {
    return (

            <ScrollContainer>
                <ScrollPage page={0}>
                    <div style={{ display: "flexbox" }} >
                        <span style={{ fontSize: "" }}>
                        
                            <Animator animation={ MoveIn(900000, 0)}>
                                
                             <SkillsRow />
                                
                            </Animator>
                        </span>
                 
                    </div>
                </ScrollPage>

            </ScrollContainer>
       
    )
};
export default Skillscroll