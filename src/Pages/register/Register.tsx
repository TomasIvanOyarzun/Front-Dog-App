import React from 'react'
import { Container, Box} from '@mui/material'

import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FormRegister from './form/FormRegister';
import { form } from './form/controlForm';
import ListImage from './form/imagenList/ListImage';
import { useFetchRegisterMutation } from '../../feactures/user/UserSlice';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import StepLabel from '@mui/material/StepLabel';
import Check from '@mui/icons-material/Check';
import SettingsIcon from '@mui/icons-material/Settings';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import VideoLabelIcon from '@mui/icons-material/VideoLabel';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import { StepIconProps } from '@mui/material/StepIcon';
import Info from './form/Info';
import FinishMessage from './FinishMessage';
import InfoIcon from '@mui/icons-material/Info';
import { useAppSelector } from '../../hooks/toolkitHooks';
const steps = ['Your Account Data', 'Info', 'Finish'];


const QontoConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 10,
    left: 'calc(-50% + 16px)',
    right: 'calc(50% + 16px)',
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: '#784af4',
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: '#784af4',
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    borderColor: theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
    borderTopWidth: 3,
    borderRadius: 1,
  },
}));

const QontoStepIconRoot = styled('div')<{ ownerState: { active?: boolean } }>(
  ({ theme, ownerState }) => ({
    color: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#eaeaf0',
    display: 'flex',
    height: 22,
    alignItems: 'center',
    ...(ownerState.active && {
      color: '#784af4',
    }),
    '& .QontoStepIcon-completedIcon': {
      color: '#784af4',
      zIndex: 1,
      fontSize: 18,
    },
    '& .QontoStepIcon-circle': {
      width: 8,
      height: 8,
      borderRadius: '50%',
      backgroundColor: 'currentColor',
    },
  }),
);

function QontoStepIcon(props: StepIconProps) {
  const { active, completed, className } = props;

  return (
    <QontoStepIconRoot ownerState={{ active }} className={className}>
      {completed ? (
        <Check className="QontoStepIcon-completedIcon" />
      ) : (
        <div className="QontoStepIcon-circle" />
      )}
    </QontoStepIconRoot>
  );
}

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 22,
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        'linear-gradient( 95deg,rgb(116, 213, 116) 0%,rgb(116, 213, 116) 50%,rgb(116, 213, 116) 100%)',
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        'linear-gradient( 95deg,rgb(116, 213, 116) 0%,rgb(116, 213, 116) 50%,rgb(116, 213, 116) 100%)',
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 3,
    border: 0,
    backgroundColor:
      theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
    borderRadius: 1,
  },
}));

const ColorlibStepIconRoot = styled('div')<{
  ownerState: { completed?: boolean; active?: boolean };
}>(({ theme, ownerState }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#ccc',
  zIndex: 1,
  color: '#fff',
  width: 50,
  height: 50,
  display: 'flex',
  borderRadius: '50%',
  justifyContent: 'center',
  alignItems: 'center',
  ...(ownerState.active && {
    backgroundImage:
      'linear-gradient( 136deg, rgb(116, 213, 116) 0%, rgb(116, 213, 116) 50%, rgb(116, 213, 116) 100%)',
    
    boxShadow : 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px'
  }),
  ...(ownerState.completed && {
    backgroundImage:
      'linear-gradient( 136deg, rgb(116, 213, 116) 0%, rgb(116, 213, 116) 50%, rgb(138,35,135) 100%)',
  }),
}));

function ColorlibStepIcon(props: StepIconProps) {
  const { active, completed, className } = props;

  const icons: { [index: string]: React.ReactElement } = {
    1: <GroupAddIcon  />,
    2: <InfoIcon />,
    3: <VideoLabelIcon />,
  };

  return (
    <ColorlibStepIconRoot ownerState={{ completed, active }} className={className}>
      {icons[String(props.icon)]}
    </ColorlibStepIconRoot>
  );
}



let initialState = {
    name : '' ,
    password : '', 
    confirmPassword : '',
    email : ''
}
const Register = () => {
    const [error, setError] = React.useState<form>(initialState)
    const [errorBack, setErrorBack] = React.useState('')
    const [input, setInput] = React.useState<form>(initialState)
    const [registerUser, resultRegister] = useFetchRegisterMutation()
    const [activeStep, setActiveStep] = React.useState(0);
    const [completed, setCompleted] = React.useState<{
      [k: number]: boolean;
    }>({});
 

    const [activeMsg, setActiveMsg] = React.useState(false)
      
    console.log(completed)
    const totalSteps = () => {
      return steps.length;
    };
  
    const completedSteps = () => {
      return Object.keys(completed).length;
    };
  
    const isLastStep = () => {
      return activeStep === totalSteps() - 1;
    };
  
    const allStepsCompleted = () => {
      return completedSteps() === totalSteps();
    };
  
    const handleNext = () => {
      const newActiveStep =
        isLastStep() && !allStepsCompleted()
          ? // It's the last step, but not all steps have been completed,
            // find the first step that has been completed
            steps.findIndex((step, i) => !(i in completed))
          : activeStep + 1;
      setActiveStep(newActiveStep);
    };
  
    const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
  
    const handleStep = (step: number) => () => {
      setActiveStep(step);
    };
  
    const handleComplete = async() => {
      const newCompleted = completed;
      newCompleted[activeStep] = true;
      setCompleted(newCompleted);
      handleNext();

      if (completedSteps() === totalSteps() ) {
      await registerUser(input).unwrap().then((response) => {
        // Handle the response here
        console.log(response)
      }).catch((error ) => {
        // Handle the error here
        setErrorBack(error.data.msg)})
    }
  
    }
   console.log('active msg state', activeMsg)
   console.log('el length de errorBack es === 0 ?',errorBack.length === 0)
   console.log('errorBack.length > 0' ,errorBack.length > 0)
  return (

    <>

    { errorBack.length > 0 && <FinishMessage type="error" msgBackError={errorBack} />}
    { resultRegister.isSuccess  && resultRegister.isError === false && <FinishMessage type="success" email={input.email} />}
    <Container>
           
        <Box sx={{ display: 'flex' , flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100vh', }}>
        <Typography variant="h3" fontWeight='bold' gutterBottom>Register</Typography> 
        <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%', background: '#fff', borderRadius: '6px' , border: '2px solid #ECECEC'}}>
          <Box sx={{  width: '100%', margin: '40px' }}>
      <Stepper   nonLinear activeStep={activeStep}  alternativeLabel connector={<ColorlibConnector />} sx={{marginBottom: '10px'}} >
        {steps.map((label, index) => (
          <Step key={label} completed={completed[index]}>
             <StepLabel StepIconComponent={ColorlibStepIcon}  onClick={handleStep(index)}>{label}</StepLabel>
            
          </Step>
        ))}
      </Stepper>
      <div>
       
          <React.Fragment>
            
           

           
            { activeStep === 0 && <Box width='100%' display='flex' justifyContent='center' marginBottom='50px'   >
           
                      <FormRegister error={error} setError={setError} input={input} setInput={setInput}/>
              </Box>}

              { activeStep === 1 && <Box width='100%' display='flex' justifyContent='center'  >
                      <Info />
              </Box>}

              { activeStep === 2 && <Box width='100%' display='flex' justifyContent='center'  >
                      
              </Box>}
             
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Button
              variant="outlined"
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button>
              <Box sx={{ flex: '1 1 auto' }} />
              <Button  disabled={ Object.values(error).join('').length > 0  } variant="contained"  onClick={handleNext} sx={{ mr: 1 , bgcolor: '#111'}}>
                Next
              </Button>
              {activeStep !== steps.length && 
                (completed[activeStep] ? (
                  <Typography variant="caption" sx={{ display: 'inline-block' }}>
                    Step {activeStep + 1} already completed
                  </Typography>
                ) : (

                  <Button disabled={Object.values(error).join('').length > 0  || Object.values(input).join('').length === 0 } variant="contained" sx={{backgroundColor: '#64BE43', color: '#fff', borderRadius: '2px'  }} onClick={handleComplete}>
                    {completedSteps() === totalSteps() - 1
                      ? 'Finish'
                      : 'Complete Step'}
                  </Button>
                ))}
            </Box>
          </React.Fragment>
        
      </div>
      </Box>  
    </Box>
    
        </Box>
    </Container>
    </>
  )
}


export default Register 