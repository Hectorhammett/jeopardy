import './main.scss';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import cx from 'classnames';

import { Cell, Grid, Heading, Text, Card } from '../../components';

const Main = () => {
    const history = useHistory();
    const hoverClasses = 'bg-primary text-white mb-3';

    const [ aHover, setAHover ] = useState(false);
    const [ bHover, setBHover ] = useState(false);
    const [ cHover, setCHover ] = useState(false);

    const onCardClick = (url) => {
        history.push(url);
    };

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
                <Card header='Create Lobby' className={cx({
                    [hoverClasses]: aHover,
                })} 
                onMouseEnter={() => setAHover(true) }
                onMouseLeave={() => setAHover(false) }
                >
                    <Text>
                        Create a lobby for your friends!
                    </Text>
                    <Text>
                        This will create a link that you can share with your friends to join.
                    </Text>
                </Card>
                <Card header='Join Game'
                className={cx({
                    [hoverClasses]: bHover,
                })} 
                onMouseEnter={() => setBHover(true) }
                onMouseLeave={() => setBHover(false) }
                >
                    <Text>
                        If a friend sent you a link to a lobby, this is the option for you!
                    </Text>
                </Card>
                <Card header='Create Game Set' 
                className={cx({
                    [hoverClasses]: cHover,
                })} 
                onMouseEnter={() => setCHover(true) }
                onMouseLeave={() => setCHover(false) }
                onClick={() => onCardClick('/createSet')}
                >
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