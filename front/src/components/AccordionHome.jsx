import { Accordion,AccordionSummary,AccordionDetails,Typography } from '@mui/material'
import React from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled } from '@mui/system';

const AccordionContainer=styled('div')({
    maxWidth:"80%",
    margin:"50px auto",
})

const AccordionHome = () => {
  return (
    <>
        <AccordionContainer>
            <Accordion>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                >
                <Typography style={{color:'#32cd32',fontSize:'1.5rem'}}>All the Exercises in one place</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography style={{fontSize:'1.25rem'}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
                >
                <Typography style={{color:"#32cd32",fontSize:'1.5rem'}}>The Best Trainers Are Here</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography style={{fontSize:'1.25rem'}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                </Typography>
                </AccordionDetails>
            </Accordion>
        </AccordionContainer>
    </>
  )
}

export default AccordionHome