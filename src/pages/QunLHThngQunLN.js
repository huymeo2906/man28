import { useState, useCallback } from "react";
import ModalThmNV from "../components/ModalThmNV";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import styles from "./QunLHThngQunLN.module.css";

const QunLHThngQunLN = () => {
  const [isModalThmNVOpen, setModalThmNVOpen] = useState(false);
  const navigate = useNavigate();

  const openModalThmNV = useCallback(() => {
    setModalThmNVOpen(true);
  }, []);

  const closeModalThmNV = useCallback(() => {
    setModalThmNVOpen(false);
  }, []);

  const onProjectContainer1Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onCardDepartmentClick = useCallback(() => {
    // Please sync "Quản lý hệ thống / Quản lý đơn vị_phòng ban (List)" to the project
  }, []);

  const onCardDepartment1Click = useCallback(() => {
    // Please sync "Projects / Detail / Group By Deadline" to the project
  }, []);

  const onCardDepartment2Click = useCallback(() => {
    // Please sync "Projects / Detail / Group By Deadline" to the project
  }, []);

  const onCardDepartment3Click = useCallback(() => {
    // Please sync "Projects / Detail / Group By Deadline" to the project
  }, []);

  const onCardDepartment4Click = useCallback(() => {
    // Please sync "Projects / Detail / Group By Deadline" to the project
  }, []);

  const onCardDepartment5Click = useCallback(() => {
    // Please sync "Projects / Detail / Group By Deadline" to the project
  }, []);

  const onCardDepartment6Click = useCallback(() => {
    // Please sync "Projects / Detail / Group By Deadline" to the project
  }, []);

  const onCardDepartment7Click = useCallback(() => {
    // Please sync "Projects / Detail / Group By Deadline" to the project
  }, []);

  const onCardDepartment8Click = useCallback(() => {
    // Please sync "Projects / Detail / Group By Deadline" to the project
  }, []);

  const onIconButtonContainerClick = useCallback(() => {
    // Please sync "Dashboard / Nhân viên" to the project
  }, []);

  const onMennuContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <>
      <div className={styles.qunLHThngQunLN}>
        <div className={styles.frameParent}>
          <div className={styles.frameWrapper}>
            <div className={styles.headerParent}>
              <div className={styles.header}>
                <div className={styles.flow1Parent}>
                  <img className={styles.flow1Icon} alt="" src="/flow-1.svg" />
                  <div className={styles.avt}>
                    <div className={styles.userpic} />
                    <div className={styles.state} />
                    <div className={styles.label}>KA</div>
                  </div>
                  <div className={styles.overviewParent}>
                    <div className={styles.overview}>Quản lý đơn vị</div>
                    <div className={styles.employees}>Employees</div>
                  </div>
                </div>
                <div className={styles.frameGroup}>
                  <div className={styles.memberParent}>
                    <div className={styles.member}>
                      <div className={styles.avt1}>
                        <div className={styles.userpic1} />
                        <div className={styles.state1} />
                        <div className={styles.label1}>KA</div>
                      </div>
                      <div className={styles.avt2}>
                        <div className={styles.userpic2} />
                        <div className={styles.state1} />
                        <div className={styles.label1}>NH</div>
                      </div>
                      <div className={styles.avt3}>
                        <div className={styles.userpic3} />
                        <div className={styles.state1} />
                        <div className={styles.label1}>HN</div>
                      </div>
                      <div className={styles.avt4}>
                        <img
                          className={styles.ovalCopy3}
                          alt=""
                          src="/oval-copy-3.svg"
                        />
                        <div className={styles.wrapper}>
                          <div className={styles.div}>+3</div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.input}>
                      <div className={styles.usearchParent}>
                        <img
                          className={styles.usearchIcon}
                          alt=""
                          src="/usearch.svg"
                        />
                        <input
                           type="text"
                           placeholder="Search..."
                          value={searchText}
                          onChange={handleInputChange}
                         />
                      </div>
                      <img
                        className={styles.uangleDownIcon}
                        alt=""
                        src="/oval-copy-3.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.uplusWrapper}>
                    <img
                      className={styles.usearchIcon}
                      alt=""
                      src="/uplus.svg"
                    />
                  </div>
                  <div className={styles.memberParent}>
                    <div className={styles.component2}>
                      <div className={styles.ucommentDotsWrapper}>
                        <img
                          className={styles.usearchIcon}
                          alt=""
                          src="/ucommentdots.svg"
                        />
                      </div>
                      <div className={styles.component2Child} />
                    </div>
                    <div className={styles.component2}>
                      <div className={styles.ucommentDotsWrapper}>
                        <img
                          className={styles.usearchIcon}
                          alt=""
                          src="/unotifiacation.svg"
                        />
                      </div>
                      <div className={styles.component2Child} />
                    </div>
                    <div className={styles.unsplashfgUd73uZmWrapper}>
                      <img
                        className={styles.unsplashfgUd73uZmIcon}
                        alt=""
                        src="/unsplashfg-ud73u-zm@2x.png"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.frameContainer}>
                <div className={styles.frameDiv}>
                  <div className={styles.inputParent}>
                    <div className={styles.input1}>
                      <div className={styles.usearchParent}>
                        <img
                          className={styles.usearchIcon}
                          alt=""
                          src="/usearch1.svg"
                        />
                        <div className={styles.search}>Tìm đơn vị</div>
                      </div>
                      <img
                        className={styles.uangleDownIcon}
                        alt=""
                        src="/oval-copy-3.svg"
                      />
                    </div>
                    <div className={styles.filter}>
                      <div className={styles.ufilterParent}>
                        <img
                          className={styles.ufilterIcon}
                          alt=""
                          src="/ufilter.svg"
                        />
                        <div className={styles.bLc}>Bộ lọc</div>
                      </div>
                      <img
                        className={styles.usearchIcon}
                        alt=""
                        src="/uangleright.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.filterParent}>
                    <div className={styles.filter1} onClick={openModalThmNV}>
                      <div className={styles.ufilterParent}>
                        <img
                          className={styles.usearchIcon}
                          alt=""
                          src="/uplus1.svg"
                        />
                        <div className={styles.headerParent}>
                          <div className={styles.spXpTheo}>Sắp xếp theo</div>
                          <div className={styles.mcU}>Thêm đơn vị</div>
                        </div>
                      </div>
                      <img
                        className={styles.uangleDownIcon}
                        alt=""
                        src="/oval-copy-3.svg"
                      />
                    </div>
                    <div className={styles.projectParent}>
                      <div className={styles.project}>
                        <div className={styles.ulistUiAltParent}>
                          <img
                            className={styles.usearchIcon}
                            alt=""
                            src="/ulistuialt.svg"
                          />
                          <div className={styles.bLc}>List</div>
                        </div>
                        <img
                          className={styles.downIcon}
                          alt=""
                          src="/down.svg"
                        />
                      </div>
                      <div
                        className={styles.project1}
                        onClick={onProjectContainer1Click}
                      >
                        <div className={styles.ulistUiAltParent}>
                          <img
                            className={styles.usearchIcon}
                            alt=""
                            src="/uwebgridalt.svg"
                          />
                          <div className={styles.bLc}>Bảng</div>
                        </div>
                        <img
                          className={styles.downIcon1}
                          alt=""
                          src="/oval-copy-3.svg"
                        />
                      </div>
                      <div className={styles.project2}>
                        <div className={styles.ulistUiAltParent}>
                          <img
                            className={styles.usearchIcon}
                            alt=""
                            src="/oval-copy-3.svg"
                          />
                          <div className={styles.bLc}>Lịch</div>
                        </div>
                        <img
                          className={styles.downIcon1}
                          alt=""
                          src="/oval-copy-3.svg"
                        />
                      </div>
                      <div className={styles.project2}>
                        <div className={styles.ulistUiAltParent}>
                          <img
                            className={styles.usearchIcon}
                            alt=""
                            src="/oval-copy-3.svg"
                          />
                          <div className={styles.bLc}>Timeline</div>
                        </div>
                        <img
                          className={styles.downIcon1}
                          alt=""
                          src="/oval-copy-3.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.frameParent1}>
            <div className={styles.frameParent2}>
              <div className={styles.cardDepartmentParent}>
                <div
                  className={styles.cardDepartment}
                  onClick={onCardDepartmentClick}
                >
                  <div className={styles.frameParent3}>
                    <div className={styles.productPreviewMoParent}>
                      <div className={styles.productPreview}>
                        Ban Quản Lý Dự Án
                      </div>
                      <img
                        className={styles.icMoreIcon}
                        alt=""
                        src="/ic-more.svg"
                      />
                    </div>
                    <div className={styles.uinfoCircleParent}>
                      <img
                        className={styles.ufilterIcon}
                        alt=""
                        src="/uinfocircle.svg"
                      />
                      <div className={styles.bLc}>
                        <span>{`Người tạo `}</span>
                        <span className={styles.nguyencuong}>@nguyencuong</span>
                      </div>
                      <div className={styles.bLc}>lúc 08/03/2022</div>
                    </div>
                  </div>
                  <div className={styles.tagParent}>
                    <div className={styles.tag}>
                      <img
                        className={styles.usearchIcon}
                        alt=""
                        src="/usitemap.svg"
                      />
                      <div className={styles.daysLeft}>
                        <span className={styles.span}>5</span>
                        <span className={styles.phngBan}>
                          <span className={styles.span1}>{` `}</span>
                          <span>phòng ban</span>
                        </span>
                      </div>
                    </div>
                    <div className={styles.tag}>
                      <img
                        className={styles.usearchIcon}
                        alt=""
                        src="/ufilemedicalalt.svg"
                      />
                      <div className={styles.daysLeft}>
                        <span className={styles.span}>20</span>
                        <span className={styles.phngBan}>
                          <span className={styles.span1}>{` `}</span>
                          <span>dự án</span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className={styles.member1}>
                    <div className={styles.avt5}>
                      <div className={styles.userpic4} />
                      <div className={styles.state4} />
                      <div className={styles.label4}>KA</div>
                    </div>
                    <div className={styles.avt6}>
                      <div className={styles.userpic5} />
                      <div className={styles.state4} />
                      <div className={styles.label4}>NH</div>
                    </div>
                    <div className={styles.avt7}>
                      <div className={styles.userpic6} />
                      <div className={styles.state4} />
                      <div className={styles.label4}>HN</div>
                    </div>
                    <div className={styles.avt8}>
                      <img
                        className={styles.ovalCopy3}
                        alt=""
                        src="/oval-copy-31.svg"
                      />
                      <div className={styles.container}>
                        <div className={styles.div}>+20</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={styles.cardDepartment}
                  onClick={onCardDepartment1Click}
                >
                  <div className={styles.frameParent3}>
                    <div className={styles.productPreviewMoParent}>
                      <div className={styles.productPreview}>
                        Ban Phát Triển Dự Án
                      </div>
                      <img
                        className={styles.icMoreIcon}
                        alt=""
                        src="/ic-more1.svg"
                      />
                    </div>
                    <div className={styles.uinfoCircleParent}>
                      <img
                        className={styles.ufilterIcon}
                        alt=""
                        src="/uinfocircle1.svg"
                      />
                      <div className={styles.bLc}>
                        <span>{`Người tạo `}</span>
                        <span className={styles.nguyencuong}>@nguyencuong</span>
                      </div>
                      <div className={styles.bLc}>lúc 08/03/2022</div>
                    </div>
                  </div>
                  <div className={styles.tagParent}>
                    <div className={styles.tag}>
                      <img
                        className={styles.usearchIcon}
                        alt=""
                        src="/usitemap1.svg"
                      />
                      <div className={styles.daysLeft}>
                        <span className={styles.span}>5</span>
                        <span className={styles.phngBan}>
                          <span className={styles.span1}>{` `}</span>
                          <span>phòng ban</span>
                        </span>
                      </div>
                    </div>
                    <div className={styles.tag}>
                      <img
                        className={styles.usearchIcon}
                        alt=""
                        src="/ufilemedicalalt1.svg"
                      />
                      <div className={styles.daysLeft}>
                        <span className={styles.span}>20</span>
                        <span className={styles.phngBan}>
                          <span className={styles.span1}>{` `}</span>
                          <span>dự án</span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className={styles.member1}>
                    <div className={styles.avt5}>
                      <div className={styles.userpic7} />
                      <div className={styles.state4} />
                      <div className={styles.label4}>KA</div>
                    </div>
                    <div className={styles.avt6}>
                      <div className={styles.userpic5} />
                      <div className={styles.state4} />
                      <div className={styles.label4}>NH</div>
                    </div>
                    <div className={styles.avt7}>
                      <div className={styles.userpic6} />
                      <div className={styles.state4} />
                      <div className={styles.label4}>HN</div>
                    </div>
                    <div className={styles.avt8}>
                      <img
                        className={styles.ovalCopy3}
                        alt=""
                        src="/oval-copy-32.svg"
                      />
                      <div className={styles.container}>
                        <div className={styles.div}>+20</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={styles.cardDepartment}
                  onClick={onCardDepartment2Click}
                >
                  <div className={styles.frameParent3}>
                    <div className={styles.productPreviewMoParent}>
                      <div className={styles.productPreview}>
                        Ban Quản Lý Hệ Thống
                      </div>
                      <img
                        className={styles.icMoreIcon}
                        alt=""
                        src="/ic-more2.svg"
                      />
                    </div>
                    <div className={styles.uinfoCircleParent}>
                      <img
                        className={styles.ufilterIcon}
                        alt=""
                        src="/uinfocircle2.svg"
                      />
                      <div className={styles.bLc}>
                        <span>{`Người tạo `}</span>
                        <span className={styles.nguyencuong}>@nguyencuong</span>
                      </div>
                      <div className={styles.bLc}>lúc 08/03/2022</div>
                    </div>
                  </div>
                  <div className={styles.tagParent}>
                    <div className={styles.tag}>
                      <img
                        className={styles.usearchIcon}
                        alt=""
                        src="/usitemap2.svg"
                      />
                      <div className={styles.daysLeft}>
                        <span className={styles.span}>5</span>
                        <span className={styles.phngBan}>
                          <span className={styles.span1}>{` `}</span>
                          <span>phòng ban</span>
                        </span>
                      </div>
                    </div>
                    <div className={styles.tag}>
                      <img
                        className={styles.usearchIcon}
                        alt=""
                        src="/ufilemedicalalt2.svg"
                      />
                      <div className={styles.daysLeft}>
                        <span className={styles.span}>20</span>
                        <span className={styles.phngBan}>
                          <span className={styles.span1}>{` `}</span>
                          <span>dự án</span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className={styles.member1}>
                    <div className={styles.avt5}>
                      <div className={styles.userpic4} />
                      <div className={styles.state4} />
                      <div className={styles.label4}>KA</div>
                    </div>
                    <div className={styles.avt6}>
                      <div className={styles.userpic5} />
                      <div className={styles.state4} />
                      <div className={styles.label4}>NH</div>
                    </div>
                    <div className={styles.avt7}>
                      <div className={styles.userpic12} />
                      <div className={styles.state4} />
                      <div className={styles.label4}>HN</div>
                    </div>
                    <div className={styles.avt8}>
                      <img
                        className={styles.ovalCopy3}
                        alt=""
                        src="/oval-copy-33.svg"
                      />
                      <div className={styles.container}>
                        <div className={styles.div}>+20</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.cardDepartmentParent}>
                <div
                  className={styles.cardDepartment}
                  onClick={onCardDepartment3Click}
                >
                  <div className={styles.frameParent3}>
                    <div className={styles.productPreviewMoParent}>
                      <div className={styles.productPreview}>
                        Ban Quản Lý Nhân Sự
                      </div>
                      <img
                        className={styles.icMoreIcon}
                        alt=""
                        src="/ic-more.svg"
                      />
                    </div>
                    <div className={styles.uinfoCircleParent}>
                      <img
                        className={styles.ufilterIcon}
                        alt=""
                        src="/uinfocircle.svg"
                      />
                      <div className={styles.bLc}>
                        <span>{`Người tạo `}</span>
                        <span className={styles.nguyencuong}>@nguyencuong</span>
                      </div>
                      <div className={styles.bLc}>lúc 08/03/2022</div>
                    </div>
                  </div>
                  <div className={styles.tagParent}>
                    <div className={styles.tag}>
                      <img
                        className={styles.usearchIcon}
                        alt=""
                        src="/usitemap.svg"
                      />
                      <div className={styles.daysLeft}>
                        <span className={styles.span}>5</span>
                        <span className={styles.phngBan}>
                          <span className={styles.span1}>{` `}</span>
                          <span>phòng ban</span>
                        </span>
                      </div>
                    </div>
                    <div className={styles.tag}>
                      <img
                        className={styles.usearchIcon}
                        alt=""
                        src="/ufilemedicalalt.svg"
                      />
                      <div className={styles.daysLeft}>
                        <span className={styles.span}>20</span>
                        <span className={styles.phngBan}>
                          <span className={styles.span1}>{` `}</span>
                          <span>dự án</span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className={styles.member1}>
                    <div className={styles.avt5}>
                      <div className={styles.userpic4} />
                      <div className={styles.state4} />
                      <div className={styles.label4}>KA</div>
                    </div>
                    <div className={styles.avt6}>
                      <div className={styles.userpic12} />
                      <div className={styles.state4} />
                      <div className={styles.label4}>NH</div>
                    </div>
                    <div className={styles.avt7}>
                      <div className={styles.userpic6} />
                      <div className={styles.state4} />
                      <div className={styles.label4}>HN</div>
                    </div>
                    <div className={styles.avt8}>
                      <img
                        className={styles.ovalCopy3}
                        alt=""
                        src="/oval-copy-31.svg"
                      />
                      <div className={styles.container}>
                        <div className={styles.div}>+20</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={styles.cardDepartment}
                  onClick={onCardDepartment4Click}
                >
                  <div className={styles.frameParent3}>
                    <div className={styles.productPreviewMoParent}>
                      <div className={styles.productPreview}>
                        Ban Kiểm Toán Nội Bộ
                      </div>
                      <img
                        className={styles.icMoreIcon}
                        alt=""
                        src="/ic-more1.svg"
                      />
                    </div>
                    <div className={styles.uinfoCircleParent}>
                      <img
                        className={styles.ufilterIcon}
                        alt=""
                        src="/uinfocircle1.svg"
                      />
                      <div className={styles.bLc}>
                        <span>{`Người tạo `}</span>
                        <span className={styles.nguyencuong}>@nguyencuong</span>
                      </div>
                      <div className={styles.bLc}>lúc 08/03/2022</div>
                    </div>
                  </div>
                  <div className={styles.tagParent}>
                    <div className={styles.tag}>
                      <img
                        className={styles.usearchIcon}
                        alt=""
                        src="/usitemap1.svg"
                      />
                      <div className={styles.daysLeft}>
                        <span className={styles.span}>5</span>
                        <span className={styles.phngBan}>
                          <span className={styles.span1}>{` `}</span>
                          <span>phòng ban</span>
                        </span>
                      </div>
                    </div>
                    <div className={styles.tag}>
                      <img
                        className={styles.usearchIcon}
                        alt=""
                        src="/ufilemedicalalt1.svg"
                      />
                      <div className={styles.daysLeft}>
                        <span className={styles.span}>20</span>
                        <span className={styles.phngBan}>
                          <span className={styles.span1}>{` `}</span>
                          <span>dự án</span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className={styles.member1}>
                    <div className={styles.avt5}>
                      <div className={styles.userpic12} />
                      <div className={styles.state4} />
                      <div className={styles.label4}>KA</div>
                    </div>
                    <div className={styles.avt6}>
                      <div className={styles.userpic5} />
                      <div className={styles.state4} />
                      <div className={styles.label4}>NH</div>
                    </div>
                    <div className={styles.avt7}>
                      <div className={styles.userpic7} />
                      <div className={styles.state4} />
                      <div className={styles.label4}>HN</div>
                    </div>
                    <div className={styles.avt8}>
                      <img
                        className={styles.ovalCopy3}
                        alt=""
                        src="/oval-copy-32.svg"
                      />
                      <div className={styles.container}>
                        <div className={styles.div}>+20</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={styles.cardDepartment}
                  onClick={onCardDepartment5Click}
                >
                  <div className={styles.frameParent3}>
                    <div className={styles.productPreviewMoParent}>
                      <div className={styles.productPreview}>Ban Sản Xuất</div>
                      <img
                        className={styles.icMoreIcon}
                        alt=""
                        src="/ic-more2.svg"
                      />
                    </div>
                    <div className={styles.uinfoCircleParent}>
                      <img
                        className={styles.ufilterIcon}
                        alt=""
                        src="/uinfocircle2.svg"
                      />
                      <div className={styles.bLc}>
                        <span>{`Người tạo `}</span>
                        <span className={styles.nguyencuong}>@nguyencuong</span>
                      </div>
                      <div className={styles.bLc}>lúc 08/03/2022</div>
                    </div>
                  </div>
                  <div className={styles.tagParent}>
                    <div className={styles.tag}>
                      <img
                        className={styles.usearchIcon}
                        alt=""
                        src="/usitemap2.svg"
                      />
                      <div className={styles.daysLeft}>
                        <span className={styles.span}>5</span>
                        <span className={styles.phngBan}>
                          <span className={styles.span1}>{` `}</span>
                          <span>phòng ban</span>
                        </span>
                      </div>
                    </div>
                    <div className={styles.tag}>
                      <img
                        className={styles.usearchIcon}
                        alt=""
                        src="/ufilemedicalalt2.svg"
                      />
                      <div className={styles.daysLeft}>
                        <span className={styles.span}>20</span>
                        <span className={styles.phngBan}>
                          <span className={styles.span1}>{` `}</span>
                          <span>dự án</span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className={styles.member1}>
                    <div className={styles.avt5}>
                      <div className={styles.userpic4} />
                      <div className={styles.state4} />
                      <div className={styles.label4}>KA</div>
                    </div>
                    <div className={styles.avt6}>
                      <div className={styles.userpic5} />
                      <div className={styles.state4} />
                      <div className={styles.label4}>NH</div>
                    </div>
                    <div className={styles.avt7}>
                      <div className={styles.userpic7} />
                      <div className={styles.state4} />
                      <div className={styles.label4}>HN</div>
                    </div>
                    <div className={styles.avt8}>
                      <img
                        className={styles.ovalCopy3}
                        alt=""
                        src="/oval-copy-33.svg"
                      />
                      <div className={styles.container}>
                        <div className={styles.div}>+20</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.cardDepartmentParent}>
                <div
                  className={styles.cardDepartment}
                  onClick={onCardDepartment6Click}
                >
                  <div className={styles.frameParent3}>
                    <div className={styles.productPreviewMoParent}>
                      <div className={styles.productPreview}>Ban Quản Trị</div>
                      <img
                        className={styles.icMoreIcon}
                        alt=""
                        src="/ic-more.svg"
                      />
                    </div>
                    <div className={styles.uinfoCircleParent}>
                      <img
                        className={styles.ufilterIcon}
                        alt=""
                        src="/uinfocircle.svg"
                      />
                      <div className={styles.bLc}>
                        <span>{`Người tạo `}</span>
                        <span className={styles.nguyencuong}>@nguyencuong</span>
                      </div>
                      <div className={styles.bLc}>lúc 08/03/2022</div>
                    </div>
                  </div>
                  <div className={styles.tagParent}>
                    <div className={styles.tag}>
                      <img
                        className={styles.usearchIcon}
                        alt=""
                        src="/usitemap.svg"
                      />
                      <div className={styles.daysLeft}>
                        <span className={styles.span}>5</span>
                        <span className={styles.phngBan}>
                          <span className={styles.span1}>{` `}</span>
                          <span>phòng ban</span>
                        </span>
                      </div>
                    </div>
                    <div className={styles.tag}>
                      <img
                        className={styles.usearchIcon}
                        alt=""
                        src="/ufilemedicalalt.svg"
                      />
                      <div className={styles.daysLeft}>
                        <span className={styles.span}>20</span>
                        <span className={styles.phngBan}>
                          <span className={styles.span1}>{` `}</span>
                          <span>dự án</span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className={styles.member1}>
                    <div className={styles.avt5}>
                      <div className={styles.userpic4} />
                      <div className={styles.state4} />
                      <div className={styles.label4}>KA</div>
                    </div>
                    <div className={styles.avt6}>
                      <div className={styles.userpic5} />
                      <div className={styles.state4} />
                      <div className={styles.label4}>NH</div>
                    </div>
                    <div className={styles.avt7}>
                      <div className={styles.userpic6} />
                      <div className={styles.state4} />
                      <div className={styles.label4}>HN</div>
                    </div>
                    <div className={styles.avt8}>
                      <img
                        className={styles.ovalCopy3}
                        alt=""
                        src="/oval-copy-31.svg"
                      />
                      <div className={styles.container}>
                        <div className={styles.div}>+20</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={styles.cardDepartment}
                  onClick={onCardDepartment7Click}
                >
                  <div className={styles.frameParent3}>
                    <div className={styles.productPreviewMoParent}>
                      <div className={styles.productPreview}>Ban Kiểm Soát</div>
                      <img
                        className={styles.icMoreIcon}
                        alt=""
                        src="/ic-more1.svg"
                      />
                    </div>
                    <div className={styles.uinfoCircleParent}>
                      <img
                        className={styles.ufilterIcon}
                        alt=""
                        src="/uinfocircle1.svg"
                      />
                      <div className={styles.bLc}>
                        <span>{`Người tạo `}</span>
                        <span className={styles.nguyencuong}>@nguyencuong</span>
                      </div>
                      <div className={styles.bLc}>lúc 08/03/2022</div>
                    </div>
                  </div>
                  <div className={styles.tagParent}>
                    <div className={styles.tag}>
                      <img
                        className={styles.usearchIcon}
                        alt=""
                        src="/usitemap1.svg"
                      />
                      <div className={styles.daysLeft}>
                        <span className={styles.span}>5</span>
                        <span className={styles.phngBan}>
                          <span className={styles.span1}>{` `}</span>
                          <span>phòng ban</span>
                        </span>
                      </div>
                    </div>
                    <div className={styles.tag}>
                      <img
                        className={styles.usearchIcon}
                        alt=""
                        src="/ufilemedicalalt1.svg"
                      />
                      <div className={styles.daysLeft}>
                        <span className={styles.span}>20</span>
                        <span className={styles.phngBan}>
                          <span className={styles.span1}>{` `}</span>
                          <span>dự án</span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className={styles.member1}>
                    <div className={styles.avt5}>
                      <div className={styles.userpic5} />
                      <div className={styles.state4} />
                      <div className={styles.label4}>KA</div>
                    </div>
                    <div className={styles.avt6}>
                      <div className={styles.userpic12} />
                      <div className={styles.state4} />
                      <div className={styles.label4}>NH</div>
                    </div>
                    <div className={styles.avt7}>
                      <div className={styles.userpic6} />
                      <div className={styles.state4} />
                      <div className={styles.label4}>HN</div>
                    </div>
                    <div className={styles.avt8}>
                      <img
                        className={styles.ovalCopy3}
                        alt=""
                        src="/oval-copy-32.svg"
                      />
                      <div className={styles.container}>
                        <div className={styles.div}>+20</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={styles.cardDepartment}
                  onClick={onCardDepartment8Click}
                >
                  <div className={styles.frameParent3}>
                    <div className={styles.productPreviewMoParent}>
                      <div className={styles.productPreview}>
                        Ban Quản Lý Dự Án
                      </div>
                      <img
                        className={styles.icMoreIcon}
                        alt=""
                        src="/ic-more2.svg"
                      />
                    </div>
                    <div className={styles.uinfoCircleParent}>
                      <img
                        className={styles.ufilterIcon}
                        alt=""
                        src="/uinfocircle2.svg"
                      />
                      <div className={styles.bLc}>
                        <span>{`Người tạo `}</span>
                        <span className={styles.nguyencuong}>@nguyencuong</span>
                      </div>
                      <div className={styles.bLc}>lúc 08/03/2022</div>
                    </div>
                  </div>
                  <div className={styles.tagParent}>
                    <div className={styles.tag}>
                      <img
                        className={styles.usearchIcon}
                        alt=""
                        src="/usitemap2.svg"
                      />
                      <div className={styles.daysLeft}>
                        <span className={styles.span}>5</span>
                        <span className={styles.phngBan}>
                          <span className={styles.span1}>{` `}</span>
                          <span>phòng ban</span>
                        </span>
                      </div>
                    </div>
                    <div className={styles.tag}>
                      <img
                        className={styles.usearchIcon}
                        alt=""
                        src="/ufilemedicalalt2.svg"
                      />
                      <div className={styles.daysLeft}>
                        <span className={styles.span}>20</span>
                        <span className={styles.phngBan}>
                          <span className={styles.span1}>{` `}</span>
                          <span>dự án</span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className={styles.member1}>
                    <div className={styles.avt5}>
                      <div className={styles.userpic6} />
                      <div className={styles.state4} />
                      <div className={styles.label4}>KA</div>
                    </div>
                    <div className={styles.avt6}>
                      <div className={styles.userpic5} />
                      <div className={styles.state4} />
                      <div className={styles.label4}>NH</div>
                    </div>
                    <div className={styles.avt7}>
                      <div className={styles.userpic7} />
                      <div className={styles.state4} />
                      <div className={styles.label4}>HN</div>
                    </div>
                    <div className={styles.avt8}>
                      <img
                        className={styles.ovalCopy3}
                        alt=""
                        src="/oval-copy-33.svg"
                      />
                      <div className={styles.container}>
                        <div className={styles.div}>+20</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.pagination}>
              <div className={styles.ufilterParent}>
                <div className={styles.bLc}>Hiển thị</div>
                <div className={styles.number}>
                  <div className={styles.bLc}>09</div>
                  <img
                    className={styles.uangleDownIcon3}
                    alt=""
                    src="/uangledown.svg"
                  />
                </div>
                <div className={styles.bLc}>mục</div>
              </div>
              <div className={styles.pagination1}>
                <div className={styles.fillArrowheadLeftParent}>
                  <img
                    className={styles.fillArrowheadLeft}
                    alt=""
                    src="/-fill--arrowheadleft.svg"
                  />
                  <div className={styles.dueDate3}>1</div>
                </div>
                <div className={styles.fillArrowheadLeftGroup}>
                  <img
                    className={styles.fillArrowheadLeft1}
                    alt=""
                    src="/oval-copy-3.svg"
                  />
                  <div className={styles.bLc}>1</div>
                </div>
                <div className={styles.fillArrowheadLeftGroup}>
                  <img
                    className={styles.fillArrowheadLeft1}
                    alt=""
                    src="/oval-copy-3.svg"
                  />
                  <div className={styles.bLc}>2</div>
                </div>
                <div className={styles.fillArrowheadLeftGroup}>
                  <img
                    className={styles.fillArrowheadLeft1}
                    alt=""
                    src="/oval-copy-3.svg"
                  />
                  <div className={styles.bLc}>3</div>
                </div>
                <div className={styles.fillArrowheadLeftGroup}>
                  <img
                    className={styles.fillArrowheadLeft1}
                    alt=""
                    src="/oval-copy-3.svg"
                  />
                  <div className={styles.bLc}>...</div>
                </div>
                <div className={styles.fillArrowheadLeftGroup}>
                  <img
                    className={styles.fillArrowheadLeft1}
                    alt=""
                    src="/oval-copy-3.svg"
                  />
                  <div className={styles.bLc}>10</div>
                </div>
                <div className={styles.fillArrowheadRightParent}>
                  <img
                    className={styles.fillArrowheadLeft}
                    alt=""
                    src="/-fill--arrowheadright.svg"
                  />
                  <div className={styles.dueDate3}>10</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.menu}>
          <div className={styles.menuMini}>
            <div className={styles.frameParent12}>
              <div className={styles.uangleDoubleRightWrapper}>
                <img
                  className={styles.uangleDoubleRightIcon}
                  alt=""
                  src="/uangledoubleright.svg"
                />
              </div>
              <div className={styles.iconButtonParent}>
                <div
                  className={styles.iconButton}
                  onClick={onIconButtonContainerClick}
                >
                  <img
                    className={styles.uhomeAltIcon}
                    alt=""
                    src="/uhomealt.svg"
                  />
                </div>
                <div className={styles.iconButton1}>
                  <img
                    className={styles.uhomeAltIcon}
                    alt=""
                    src="/ulistul.svg"
                  />
                </div>
                <div className={styles.iconButton2}>
                  <img
                    className={styles.uhomeAltIcon}
                    alt=""
                    src="/usuitcase.svg"
                  />
                </div>
                <div className={styles.iconButton2}>
                  <img
                    className={styles.uhomeAltIcon}
                    alt=""
                    src="/ufilemedicalalt3.svg"
                  />
                </div>
                <div className={styles.iconButton4}>
                  <img
                    className={styles.uhomeAltIcon}
                    alt=""
                    src="/usitemap3.svg"
                  />
                </div>
                <div className={styles.iconButton2}>
                  <img
                    className={styles.uhomeAltIcon}
                    alt=""
                    src="/uusersalt.svg"
                  />
                </div>
              </div>
            </div>
            <div className={styles.uangleDoubleRightWrapper}>
              <img
                className={styles.uangleDoubleRightIcon}
                alt=""
                src="/usetting.svg"
              />
            </div>
          </div>
          <div className={styles.vectorParent}>
            <img className={styles.frameChild} alt="" src="/rectangle-1.svg" />
            <div className={styles.image1Parent}>
              <img className={styles.image1Icon} alt="" src="/image-1@2x.png" />
              <div className={styles.qunLHThngParent}>
                <div className={styles.overview}>Quản lý hệ thống</div>
                <div className={styles.mennuParent}>
                  <div className={styles.mennu} onClick={onMennuContainerClick}>
                    <img
                      className={styles.ucodeBranchIcon}
                      alt=""
                      src="/ucodebranch.svg"
                    />
                    <div className={styles.hmNayWrapper}>
                      <div className={styles.hmNay}>Phòng ban</div>
                    </div>
                    <img
                      className={styles.ucodeBranchIcon}
                      alt=""
                      src="/uangleright1.svg"
                    />
                  </div>
                  <div className={styles.mennu1}>
                    <img
                      className={styles.usearchIcon}
                      alt=""
                      src="/uusersquare.svg"
                    />
                    <div className={styles.hmNayWrapper}>
                      <div className={styles.hmNay}>Thành viên</div>
                    </div>
                    <img
                      className={styles.ucodeBranchIcon}
                      alt=""
                      src="/uangleright2.svg"
                    />
                  </div>
                  <div className={styles.mennu1}>
                    <img
                      className={styles.usearchIcon}
                      alt=""
                      src="/uusersalt1.svg"
                    />
                    <div className={styles.hmNayWrapper}>
                      <div className={styles.hmNay}>Nhóm người dùng</div>
                    </div>
                    <img
                      className={styles.ucodeBranchIcon}
                      alt=""
                      src="/uangleright2.svg"
                    />
                  </div>
                  <div className={styles.mennu1}>
                    <img
                      className={styles.usearchIcon}
                      alt=""
                      src="/ushieldcheck.svg"
                    />
                    <div className={styles.hmNayWrapper}>
                      <div className={styles.hmNay}>Phân quyền</div>
                    </div>
                    <img
                      className={styles.ucodeBranchIcon}
                      alt=""
                      src="/uangleright2.svg"
                    />
                  </div>
                  <div className={styles.mennu1}>
                    <img
                      className={styles.usearchIcon}
                      alt=""
                      src="/uslidersv.svg"
                    />
                    <div className={styles.hmNayWrapper}>
                      <div className={styles.hmNay}>Trường dữ liệu</div>
                    </div>
                    <img
                      className={styles.ucodeBranchIcon}
                      alt=""
                      src="/uangleright2.svg"
                    />
                  </div>
                  <div className={styles.mennu1}>
                    <img
                      className={styles.usearchIcon}
                      alt=""
                      src="/mail.svg"
                    />
                    <div className={styles.hmNayWrapper}>
                      <div className={styles.hmNay}>Thông báo Email</div>
                    </div>
                    <img
                      className={styles.ucodeBranchIcon}
                      alt=""
                      src="/uangleright2.svg"
                    />
                  </div>
                  <div className={styles.mennu1}>
                    <img
                      className={styles.usearchIcon}
                      alt=""
                      src="/uimagev.svg"
                    />
                    <div className={styles.hmNayWrapper}>
                      <div className={styles.hmNay}>Hình nền</div>
                    </div>
                    <img
                      className={styles.ucodeBranchIcon}
                      alt=""
                      src="/uangleright2.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isModalThmNVOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeModalThmNV}
        >
          <ModalThmNV onClose={closeModalThmNV} />
        </PortalPopup>
      )}
    </>
  );
};

export default QunLHThngQunLN;
