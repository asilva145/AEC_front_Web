import React, { Component } from 'react';
import { Grid, Column, Dialog, Container } from '@sencha/ext-modern';
import './Album.scss';

class Album extends Component {
    constructor(props) {
        super(props);
        this.state = { album: props.album };
        this.tracks = Ext.create('Ext.data.Store', {
            proxy: {
                type: 'ajax',
                reader: {
                    type: 'json',
                    rootProperty: 'tracks.items'
                }
            }
        });
        window.Spotify[this.constructor.name] = this; // For debugging
    }
    componentDidUpdate(prevProps) {
        if (this.props.album !== prevProps.album) {
            if (this.props.album) {
                this.setState({ album: this.props.album });
                this.tracks.load({ url: this.props.album.data.href });
            } else {
                this.setState({ album: false });
            }
        }
    }
    render() {
        return (
            <Dialog
                displayed={!!this.state.album}
                title={this.state.album ? this.state.album.data.name : ''}
                closable
                closeAction="hide"
                maskTapHandler={dialog => dialog.hide()}
                onHide={() => {
                    this.setState({ album: false });
                    // If there is an onUnselect callback, run it.
                    this.props.onUnselect && this.props.onUnselect();
                }}
                height={400}
                width={700}
                cls="foo"
                layout={{ type: 'hbox' }}
            >
                <Grid flex={1} store={this.tracks} hideHeaders={true}>
                    <Column text="Name" dataIndex="name" flex="1" />
                    <Column
                        dataIndex="duration_ms"
                        renderer={ms => {
                            const minutes = Math.floor(ms / 1000 / 60);
                            const seconds = Math.floor(ms / 1000) % 60;
                            return `${minutes}:${seconds.toString().padStart(2, '0')}`;
                        }}
                        width={80}
                    />
                </Grid>

                <Container layout={{ type: 'vbox' }}>
                    <Container cls="righttop">This will be the audio player</Container>
                    <Container flex={1} cls="rightbottom">
                        This will be the chart
                    </Container>
                </Container>
            </Dialog>
        );
    }
}

export default Album;
