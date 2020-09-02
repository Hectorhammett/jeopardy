import './main.scss';
import React, { useState } from 'react';

import { Cell, Grid, Heading, Text, Card } from '../../components';

const Main = () => {
    const [ accordeonOpen, setAccordeonOpen ] = useState(1);

    return (
        <Grid className='main' align='center'>
            <Cell span={12}>
                <Heading className='text-center'>
                    Welcome to Jeopardy!
                </Heading>
                <Heading size={3} className='text-center'>
                    Select an option from down below to get started!
                </Heading>
            </Cell>
            <Cell span={12} xl={6} lg={8} md={8} xlStart={4} lgStart={3} mdStart={3}>
                <Card header='Create Lobby' open={accordeonOpen === 1}>
                    <Text>
                        Create a lobby for your friends!
                    </Text>
                    <Text color='muted'>
                        This will create a link that you can share with your friends to join.
                    </Text>
                </Card>
                <Card header='Join Game' open={accordeonOpen === 2}>
                    <Text>
                        If a friend sent you a link to a lobby, this is the option for you!
                    </Text>
                </Card>
                <Card header='Create Game Set' open={accordeonOpen === 3}>
                    <Text>
                        You will need to visit this option first to create a set of questions and categories.
                    </Text>
                    <Text color='danger'>
                        Yo need to run this option the first time the app is booted.
                    </Text>
                </Card>
            </Cell>
        </Grid>
    )
}

export default Main;