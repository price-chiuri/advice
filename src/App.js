import React from 'react';
import axios from 'axios';

import Container from '@mui/material/Container';
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

class App extends React.Component {
    state = {
        advice: ''
    }

    componentDidMount() {
        this.fetchAdvice();
    }

    fetchAdvice = () => {
        axios.get('https://api.adviceslip.com/advice')
            .then((response) => {
                let advice = response.data.slip.advice;

                this.setState({
                    advice: advice
                })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    render() {
        const { advice } = this.state;

        return (
            <Container style={{
                maxWidth: '100vw',
                height: '100vh',
                display: 'flex',
                justifyContent: 'center',
                backgroundColor: 'gray',
            }}>
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    textAlign: 'center',
                    '& > :not(style)': {
                        width: 350,
                        height: 128,
                        padding: 2,
                    },
                }}>
                    <Paper elevation={8}>
                        <div>
                            {advice}
                        </div>
                        <div style={{
                            width: '100%',
                            marginTop: '25px'
                        }}>
                            <Button variant="outlined" size="small" onClick={this.fetchAdvice}>Fetch Advice</Button>
                        </div>
                    </Paper>
                </Box>
            </Container>
        )
    }
}

export default App;