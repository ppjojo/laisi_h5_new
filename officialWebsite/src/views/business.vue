<template>
    <div class="contain">
        <div class="kefu">
            
            <transition name="el-zoom-in-center">
                <img class="kefu" @click="qrshow=true" v-show="!qrshow" src="../assets/img/cooprate/kefu.png" alt="">
            </transition>
            <transition name="el-zoom-in-top">
                <img class="qr" @click="qrshow=false" v-show="qrshow" src="../assets/img/cooprate/qr.png" alt="">
            </transition>
        </div>
        <div class="bannerBox ">
            <img class="qr" src="../assets/img/cooprate/qr.png" alt="">
            <swiper :options="swiperOptions_bannner">
                <swiper-slide v-for="item in banner">
                    <video v-if="item.pictureVideo.indexOf('.mp4')!='-1'" :src="item.pictureVideo" muted="" autoplay=""
                        loop="" width="100%"></video>
                    <div class="bannerImg_contain" v-else :style="{'background-image':'url('+item.pictureVideo+')'}">
                    </div>
                </swiper-slide>
            </swiper>
            <div class="joinUsButton" @click="joinUs">加入我们</div>
        </div>

        <div class="typeBox">
            <img src="../assets/img/cooprate/be-1.png" alt="">
            <img src="../assets/img/cooprate/be-2.png" alt="">
            <img src="../assets/img/cooprate/be-3.png" alt="">
        </div>

        <div class="beparterBox">
            <div class="beparterDiv">
                <img src="../assets/img/cooprate/bePater-1.png" alt="">
                <img src="../assets/img/cooprate/bePater-2.png" alt="">
            </div>
        </div>

        <div class="giveBox">
            <div class="moduleTitleBox">
                <img src="../assets/img/cooprate/give-title.png" class="moduleTitleImg" alt="">
            </div>
            <div class="giveDiv">
                <el-row>
                    <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                        <div class="giveDetail">
                            <img src="../assets/img/cooprate/give-1.png" alt="">
                            <div>
                                <p class="china">多设备管理</p>
                                <p class="en">Multi-device management</p>
                            </div>
                        </div>
                    </el-col>
                    <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                        <div class="giveDetail">
                            <img src="../assets/img/cooprate/give-2.png" alt="">
                            <div>
                                <p class="china">运动数据云存储</p>
                                <p class="en">Cloud storage of sports data</p>
                            </div>
                        </div>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                        <div class="giveDetail">
                            <img src="../assets/img/cooprate/give-3.png" alt="">
                            <div>
                                <p class="china">厂商资源优先配置</p>
                                <p class="en">Vendor resources are allocated first</p>
                            </div>
                        </div>
                    </el-col>
                    <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                        <div class="giveDetail">
                            <img src="../assets/img/cooprate/give-4.png" alt="">
                            <div>
                                <p class="china">专业团队拍摄运动AI课程</p>
                                <p class="en">A professional team shoots a sports AI course</p>
                            </div>
                        </div>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                        <div class="giveDetail">
                            <img src="../assets/img/cooprate/give-5.png" alt="">
                            <div>
                                <p class="china">健身达人集结分享经验</p>
                                <p class="en">Fitness enthusiasts gather to share experiences</p>
                            </div>
                        </div>
                    </el-col>
                    <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                        <div class="giveDetail">
                            <img src="../assets/img/cooprate/give-6.png" alt="">
                            <div>
                                <p class="china">网络红人带货种草</p>
                                <p class="en">On the Celebrity Spokeperson</p>
                            </div>
                        </div>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                        <div class="giveDetail">
                            <img src="../assets/img/cooprate/give-7.png" alt="">
                            <div>
                                <p class="china">超丰富趣味玩法免费体验</p>
                                <p class="en">Super rich fun gameplay free experience</p>
                            </div>
                        </div>
                    </el-col>
                    <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                        <div class="giveDetail">
                            <img src="../assets/img/cooprate/give-8.png" alt="">
                            <div>
                                <p class="china">定制云端PK赛事活动</p>
                                <p class="en"> Customize cloud PK events</p>
                            </div>
                        </div>
                    </el-col>
                </el-row>
            </div>
        </div>

        <div class="advantageBox">
            <div class="moduleTitleBox">
                <img src="../assets/img/cooprate/advantage-title.png" class="moduleTitleImg" alt="">
            </div>
            <div class="contentBox">
                <el-row :gutter="20">
                    <el-col :xs="12" :sm="12" :md="6" :lg="6" :xl="6">
                        <!-- <div class="detailBox">
                            <div class="label">01</div>
                            <div class="title">运动健康行业<br>发展空间大 <span>。</span></div>
                        </div> -->
                        <img style="width:2.88rem;" src="../assets/img/cooprate/ys-1.png" alt="">

                    </el-col>
                    <el-col :xs="12" :sm="12" :md="6" :lg="6" :xl="6">
                        <!-- <div class="detailBox">
                            <div class="label">02</div>
                            <div class="title">智能运动健康<br>市场排名靠前<span>。</span></div>
                        </div> -->
                        <img style="width:2.88rem;" src="../assets/img/cooprate/ys-2.png" alt="">
                    </el-col>
                    <el-col :xs="12" :sm="12" :md="6" :lg="6" :xl="6">
                        <!-- <div class="detailBox">
                            <div class="label">03</div>
                            <div class="title">较强的产品研发和资源优势<span>。</span></div>
                        </div> -->
                        <img style="width:2.88rem;" src="../assets/img/cooprate/ys-3.png" alt="">
                    </el-col>
                    <el-col :xs="12" :sm="12" :md="6" :lg="6" :xl="6">
                        <!-- <div class="detailBox">
                            <div class="label">04</div>
                            <div class="title">拥有百万健身达人喜爱的平台<span>。</span></div>
                        </div> -->
                        <img style="width:2.88rem;" src="../assets/img/cooprate/ys-4.png" alt="">
                    </el-col>
                </el-row>

            </div>
        </div>

        <div class="parterBox" id="parter_link">
            <div class="moduleTitleBox">
                <img src="../assets/img/cooprate/parter-title.png" class="moduleTitleImg" alt="">
            </div>
            <div class="parterDiv">
                <img v-for="item in parterList" :src="item.pictureVideo" alt="">

            </div>
        </div>
    </div>
</template>

<script>
    import Utils from "@u/callUtil";
    import {
        getAllPicture
    } from "@a/picture";

    export default {
        name: 'HelloWorld',
        props: {},
        data() {
            return {
                qrshow: false,
                banner: [],
                parterList: [],
                swiperOptions_bannner: {
                    spaceBetween: 0,
                    loop: true,
                    observer: true, //修改swiper自己或子元素时，自动初始化swiper 
                    observeParents: true //修改swiper的父元素时，自动初始化swiper 

                },
            }
        },
        mounted() {
            Utils.$on('goAnchor', (flag) => {
                this.goAnchor(flag);
            })
        },
        created() {
            this.getBanner()
            this.getParter()
        },
        methods: {
            goAnchor(selector) {
                window.scrollTo({
                    top: document.getElementById(selector).offsetTop - 100,
                    behavior: "smooth"
                });
            },
            getBanner() {
                getAllPicture({
                    pictureBelong: 3,
                    pictureType: 0
                }).then(res => {
                    this.banner = res.data;
                })
            },
            getParter() {
                getAllPicture({
                    // pictureBelong: 3,
                    pictureType: 2
                }).then(res => {
                    this.parterList = res.data;
                })
            },
            joinUs() {
                this.$router.push({
                    path: "joinUs"
                })
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    @font-face {
        font-family: "DINCondensed-Bold";
        src: url("../font/DINCondensed-Bold/DINCondensed-Bold.woff2") format("woff2"),
            url("../font/DINCondensed-Bold/DINCondensed-Bold.woff") format("woff"),
            url("../font/DINCondensed-Bold/DINCondensed-Bold.ttf") format("truetype"),
            url("../font/DINCondensed-Bold/DINCondensed-Bold.eot") format("embedded-opentype"),
            url("../font/DINCondensed-Bold/DINCondensed-Bold.svg") format("svg");
        font-weight: normal;
        font-style: normal;
    }

    .contain {
        .kefu {
            position: fixed;
            bottom: 1rem;
            right: 0;
            z-index: 2;

            .kefu {
                width: 0.8rem;
                height: 0.8rem;
            }

            .qr {
                width: 2.57rem;
            }
        }

        background: linear-gradient(to bottom, #FFFFFF, #EEF3FC, #F9FDFF, #E6FBFF, #EEF3FD);

        .bannerBox {
            position: relative;

            .bannerImg_contain {
                background-image: url('../assets/img/banner.png');
                width: 100%;
                height: 7.69rem;
                background-size: contain;
                background-position: 50% 50%;
                background-repeat: no-repeat;
            }

            .qr {
                position: absolute;
                top: 5.8rem;
                right: 18%;
                width: 2.57rem;
                z-index: 3;
            }

            .joinUsButton {
                position: absolute;
                top: 52%;
                left: calc(50% - 0.65rem);
                border-radius: 0.25rem;
                width: 1.3rem;
                line-height: 0.36rem;
                color: #fff;
                background-color: rgba(51, 51, 48, 1);
                box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.5);
                z-index: 2;
                font-size: 0.17rem;
            }
        }


        .typeBox {
            max-width: 12rem;
            margin: 0 auto;

            img {
                margin-top: 1.5rem;
                width: 100%;
            }
        }

        .beparterBox {
            margin-top: 1rem;
            background-image: url('../assets/img/cooprate/bePater-bg.png');
            width: 100%;
            height: 4.3rem;
            background-size: contain;
            background-repeat: no-repeat;
            position: relative;

            .beparterDiv {
                max-width: 12rem;
                margin: 0 auto;
                display: flex;
                justify-content: space-between;
                position: relative;
                bottom: -3rem;

                img {
                    transition: all 0.3s;
                    width: 48%;

                    &:hover {
                        transform: scale(1.1);
                    }
                }
            }
        }

        .giveBox {
            max-width: 12rem;
            margin: 0 auto;
            margin-top: 2rem;

            .giveDiv {
                background-color: #FFFFFF;
                box-shadow: 3px 4px 20px 6px rgba(173, 173, 173, 0.06);
                padding: 0.6rem;
                padding-bottom: 0.1rem;
                width: 100%;

                // .el-row {
                //     margin-bottom: 0.4rem;

                //     &:last-child {
                //         margin-bottom: 0;
                //     }
                // }

                .giveDetail {
                    display: flex;
                    justify-content: flex-start;
                    align-items: center;
                    text-align: left;
                    margin-bottom: 0.5rem;

                    img {
                        width: 0.8rem;
                        height: 0.8rem;
                        margin-right: 0.3rem
                    }

                    ;

                    .china {
                        color: #333333;
                        font-size: 0.28rem;
                        line-height: 0.4rem;
                    }

                    .en {
                        color: #999;
                        font-size: 0.16rem;
                        line-height: 0.3rem;
                    }
                }
            }
        }

        .advantageBox {
            max-width: 12.2rem;
            margin: 0 auto;

            .contentBox {
                padding: 0.5rem 0.1rem;

                .detailBox {
                    text-align: left;
                    height: 2.88rem;
                    box-shadow: 3px 4px 20px 6px rgba(173, 173, 173, 0.06);
                    background-color: rgba(255, 255, 255, 1);
                    padding: 0.4rem;
                    padding-bottom: 20px;
                    position: relative;
                    display: flex;
                    align-items: center;
                    margin-bottom: 0.4rem;

                    .label {
                        position: absolute;
                        top: 0.5rem;
                        left: 0.3rem;
                        font-size: 1.15rem;
                        color: #F4F4F4;
                        z-index: 2;
                        font-family: DINCondensed-Bold;
                    }


                    .title {
                        font-size: 0.28rem;
                        color: #000;
                        line-height: 0.4rem;
                        position: relative;
                        z-index: 2;

                        span {
                            color: red;
                        }
                    }

                }
            }
        }

        .parterBox {
            max-width: 12.2rem;
            margin: 0 auto;
            padding-bottom: 1rem;

            .parterDiv {
                background-color: rgba(255, 255, 255, 1);
                box-shadow: 3px 4px 20px 6px rgba(173, 173, 173, 0.06);
                display: flex;
                justify-content: space-between;
                flex-wrap: wrap;
                padding: 0.5rem;

                img {
                    // min-width: 21%;
                    height: 1rem;
                    margin-bottom: 0.5rem;
                }

            }
        }

    }

    //小于992
    @media (max-width: 992px) {
        .bannerBox {
            .bannerImg_contain {

                background-size: cover !important;

            }
        }

    }
</style>