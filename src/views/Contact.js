import { Link } from "@reach/router";
import emailjs from "emailjs-com";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import { useState } from "react";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { FormatStrikethroughOutlined } from "@material-ui/icons";

const Contact = () => {
    const [open, setOpen] = useState(false);
    
    //Alert When Submitting Form
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    //E-Mail 
    const sendEmail = (e) => {
        e.preventDefault();

    emailjs.sendForm('service_id_408', 'template_xybwhrj', e.target, 'user_guRwP61T6MuvOcNdaBWhn')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();
    }

    // Icon Style
    const useStyles = makeStyles((theme) => ({
        button: {
            margin: theme.spacing(1),
            width:120,
            height:40,
            left: -8,
            fontSize: 18
        },
        linkedInIcon: {
            position: "absolute",
            left: 18,
            top: 70,
            fontSize: 58
        },
        faceBookIcon: {
            position: "absolute",
            left: 18,
            top: 124,
            fontSize: 58
        },
        instagramIcon: {
            position: "absolute",
            left: 18,
            top: 181,
            fontSize: 58
        },
        gitHubIcon: {
            position: "absolute",
            left: 23,
            top: 242,
            fontSize: 50                                
        }
    }));
    
    const classes = useStyles();
    
    // Formik Validations
    // const validationSchema = yup.object({
    //     subject: yup
    //         .string("Enter A Subject")
    //         .min(5, "Subject Must Be Atleast 5 Characters")
    //         .required("Subject Is Requird"),
    //     email: yup
    //         .string("Enter Your Email")
    //         .email("Enter A Valid Email")
    //         .required("Email Is Required"),
    //     name: yup
    //         .string("Enter Your Name")
    //         .min(3, "Name Must Be A Minimum Of 3 Characters")
    //         .required("Name Is Required"),
    //     message: yup 
    //         .string("Enter Your Message")
    //         .min(20, "Message Must Be A Minimum Of 20 Characters")
    //         .required("Message Is Required")
    // });

    
    
        // const formik = useFormik({
        //     initialValues: {
        //     email: 'foobar@example.com',
            
        //     },
        //     validationSchema: validationSchema,
        //     onSubmit: (values) => {
        //     alert(JSON.stringify(values, null, 2));
        //     },
        // });
    
    return (
        <>    
            <div className="contact-text">
                <h1 className="contact-h1">Contact Me</h1>
                <hr/>
            </div>
            <LinkedInIcon onClick={event => window.location.href='https://www.linkedin.com/in/hussein-guevara/'} className={classes.linkedInIcon}/><h3 className="linkedin-h">Connect On Linked In</h3>
            <FacebookIcon className={classes.faceBookIcon}/><h3 className="facebook-h">Like Me On Facebook</h3>
            <InstagramIcon onClick={event => window.location.href='https://www.instagram.com/da90skidd/'} className={classes.instagramIcon}/><h3 className="instagram-h">Follow Me On Instagram</h3>
            <GitHubIcon onClick={event =>  window.location.href='https://github.com/HusseinGuevara'} className={classes.gitHubIcon}/><h3 className="github-h">Check Me Out On GitHub</h3>
            <div className="email-container">
                <form className="contact-form" onSubmit={sendEmail}>
                    <TextField className="subject-line" label="Subject" name="subject" variant="outlined" />
                    <TextField className="email-line" label="E-Mail" name="email" type="email" variant="outlined" />
                    <TextField className="name-line" label="Name" name="name" variant="outlined"/>
                    <TextField className="message-line" label="Message" name="message" variant="outlined"  multiline
                    rows={4} maxRows={4}/>
                    <Button
                        variant="contained"
                        color="primary"
                        type="submit"
                        className={classes.button}
                        endIcon={<SendIcon/>}
                        onClick={handleClickOpen}>
                        Send
                    </Button>
                </form>

                <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">{"Thank You For Your Interest!"}</DialogTitle>
                    <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Your E-Mail has been sent. Please expect a response within 1-2 days. 
                    </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                    <Button onClick={handleClose} color="primary" autoFocus>
                        Close 
                    </Button>
                    </DialogActions>
                </Dialog>

            </div>    
        </>        
    );



    
}
export default Contact
