import { Layout, Button } from "antd";
import "./MainDisplay.css";
import { Link } from "react-router-dom";
import { AudioOutlined } from "@ant-design/icons";
import { useNavigate,Outlet } from 'react-router-dom';
// const { Search } = Input;

const { Header, Footer, Sider, Content } = Layout;

// const navigate=useNavigate();
// const navigateToPage=()=>{
//   navigate("/BatchContent")
// }

function MainDisplay() {
//   const navigate=useNavigate();
// const navigateToPage=()=>{
//   navigate("/BatchContent")
// }
  
  return (
  <>
    <Layout breakpoint="lg">
      <Header style={{ height: 50 }} className="header bg-white">
        <div id="logoutdiv">
          <Button id="logoutbutton">Logout</Button>
        </div>

        <div id="technoimg">
          <img className="img-fluid" src="./admin/logo1.jpg" alt="no Img" />
        </div>

        <div id="searchdiv">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            style={{
              backgroundColor: "#0000000A",
                  }}
          />
        </div>
      </Header>
    </Layout>
    <Layout>
      <Sider
        className="site-layout-background"
        width={80}
        breakpoint="lg"
        collapsedWidth="0"
        style={{ height: 600, border: "none", marginTop: 1 }}
      >
        <div id="buttonsDiv">
          <Link to={"BatchContent"}>
            <Button id="batchimg" >
              <p style={{ marginTop: 37, marginLeft: -5, color: " #075575" }}>
                Batch
              </p>
            </Button>
          </Link>

          <Link to={"MentorContent"}>
            <Button id="mentorimg">
              <p style={{ marginTop: 37, marginLeft: -10, color: " #075575" }}>
                Mentor
              </p>
            </Button>
          </Link>

          <Link to={"RequestContent"}>
            <Button id="adduserimg">
              <p style={{ marginTop: 37, marginLeft: -12, color: " #075575" }}>
                Request
              </p>
            </Button>
          </Link>
        </div>
      </Sider>
      <Layout style={{ padding: "0 24px 24px" }}></Layout>
    </Layout>
    <Outlet/>
  </>
);
                }

export default MainDisplay;
