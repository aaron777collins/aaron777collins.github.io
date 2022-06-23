import Navbar from '../../components/Navbar';
import './NoPage.scss';

function NoPage() {
    return (
        <div className="No-page">
            <Navbar pageName={'No Page'} />
            <header className="No-page-header">
                <h1>No Page Found!</h1>
            </header>
            <body className="">
                <p>Still nothing here..</p>
            </body>
        </div>
    );
}
export default NoPage;