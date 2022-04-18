import './DynamicSideNav.scss';
import MenuIcon from '@mui/icons-material/Menu';


function DynamicSideNav() {
    return (
        <div className="Dynamic-side-nav">
            <div className="Expanding-menu-icon">
                <MenuIcon sx={{width: '100%', height:'100%',}}></MenuIcon>
            </div>
        </div>
    );
}
export default DynamicSideNav;