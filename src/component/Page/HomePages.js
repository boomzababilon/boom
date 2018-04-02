import React , {Component} from 'react';
import image from '../../immage/bb.jpg'
import image1 from '../../immage/jj.png'
import image2 from '../../immage/kk.png'
import image3 from '../../immage/tt.png'


class  HomePages extends Component {
    render(){
        return(
            <div className="App">
                <div className="jumbotron text-center">
                    <font color="#5f9ea0"><h1 align="center">Portfolio</h1></font>
                    <p>N A R U T C H A I &nbsp;  W O N G J I A K</p>
                    <p>น รุ ฒ ม์ ชั ย &nbsp;  ว ง ษ์ เ จี ย ก</p>
                    <p>B O O M</p>
                </div>


                <center><img src={image} className="rounded-circle" width='40%'/></center>
                <br/><br/>
                <div className="container">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-4">
                                <center><img src={image1} className="rounded-circle" width='30%'/><br/><br/></center>
                                <center><font color="#daa520"><h3>ประวัติการศึกษา</h3></font></center>
                                <center><p>ประถม:&nbsp;รร.วัดลานบุญ</p></center>
                                <center><p>มัฐยมตอนต้น:&nbsp;รร.พรตพิทยพยัต</p></center>
                                <center><p>มัฐยมตอนปลาย:&nbsp;รร.พรตพิทยพยัต</p></center>
                                <center><p>ปริญญาตรี:&nbsp;KMITL</p></center>
                            </div>
                            <div className="col-sm-4">
                                <center><img src={image2} className="rounded-circle" width='50%'/></center>
                                <center><font color="green"><h3>งานอดิเรก</h3></font></center>
                                <center><p> กีฬา:&nbsp;เตะฟุตบอล</p></center>
                                <center><p>กิจกรรมยามว่าง:&nbsp;เล่นเกมส์</p></center>
                            </div>
                            <div className="col-sm-4">
                                <center><img src={image3} className="rounded-circle" width='40%'/><br/><br/></center>
                                <center><font color="#dc143c"><h3>ติดต่อ</h3></font></center>
                                <center><p>FB:<a href="https://www.facebook.com/narutchai.wongjeak"
                                                 target="_blank"> Narutchai wongjeak </a></p></center>
                                <center><p>ig:<a href="https://www.instagram.com/narutchai_boom/"
                                                 target="_blank"> narutchai_boom </a></p></center>
                                <center><p>Tel:&nbsp;093-XXXX-XXX</p></center>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export  default HomePages