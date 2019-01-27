import '../index.css';
import '../styles.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'reactstrap';

class MainContainer extends React.Component {
    render() {
        return (
            <Container className="bg-primary">
                <div className="red lg-txt p-5">Welcome to Next.js!</div>
            </Container>
        );
    }
}

export default MainContainer;