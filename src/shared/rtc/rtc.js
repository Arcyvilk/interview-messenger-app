import Peer from 'peerjs';
import store from '../store';
import { newMessage } from '../store/modules';

class Connection {
    constructor(yourId, remoteId) {
        this.yourId = yourId;
        this.remoteId = remoteId;

        this.dualconnection = null;
        this.peer = null;
    }

    openConnection = () => {
        console.log('Connecting...');
        this.peer = new Peer(this.yourId);
        this.peer.on('open', this.onConnectToPeer);
        this.peer.on('connection', this.onConnection);
        this.peer.on('error', error => console.log(error))
    }

    onConnectToPeer = () => {
        this.dualconnection = this.peer.connect(this.remoteId);
        this.subscribeToConnection();
    }
    onConnection = (dualconnection) => {
        this.dualconnection = dualconnection;
        this.subscribeToConnection();
    }
    subscribeToConnection = () => {
        this.dualconnection.on('open', () => console.log(`Connection opened! ${this.yourId}-${this.remoteId}`));
        this.dualconnection.on('close', () => console.log(`Connection closed! ${this.yourId}-${this.remoteId}`));
        this.dualconnection.on('data', (data) => this.receiveMessage(data));
        this.dualconnection.on('error', (error) => console.log(error));
    }

    receiveMessage = (data) => {
        store.dispatch(newMessage(data, this));
    };

    send = (data) => {
        const msg = {
            content: data,
            timestamp: Date.now(),
            from: this.yourId
        }
        this.dualconnection.send(msg);
        store.dispatch(newMessage(msg, this));
    };
}

export default Connection;