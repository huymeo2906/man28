import styles from "./ModalThmNV.module.css";

const ModalThmNV = () => {
  return (
    <div className={styles.modalThmNV}>
      <div className={styles.labelParent}>
        <div className={styles.label}>Thêm mới đơn vị</div>
        <img className={styles.closeIcon} alt="" src="/close.svg" />
      </div>
      <div className={styles.frameParent}>
        <div className={styles.inputParent}>
          <div className={styles.input}>
            <div className={styles.label1}>Tên đơn vị</div>
            <div className={styles.input1}>
              <img
                className={styles.outlineSearch}
                alt=""
                src="/oval-copy-3.svg"
              />
              <div className={styles.labelPointer}>
                <div className={styles.label2}>Default</div>
                <div className={styles.pointer} />
              </div>
              <img
                className={styles.outlineSearch}
                alt=""
                src="/oval-copy-3.svg"
              />
              <img
                className={styles.outlineClose}
                alt=""
                src="/oval-copy-3.svg"
              />
            </div>
          </div>
          <div className={styles.input2}>
            <div className={styles.label1}>Mã đơn vị</div>
            <div className={styles.input1}>
              <img
                className={styles.outlineSearch}
                alt=""
                src="/oval-copy-3.svg"
              />
              <div className={styles.labelPointer}>
                <div className={styles.label2}>Default</div>
                <div className={styles.pointer} />
              </div>
              <img
                className={styles.outlineSearch}
                alt=""
                src="/oval-copy-3.svg"
              />
              <img
                className={styles.outlineClose}
                alt=""
                src="/oval-copy-3.svg"
              />
            </div>
          </div>
        </div>
        <div className={styles.inputGroup}>
          <div className={styles.inputGroup}>
            <div className={styles.label1}>Chọn đơn vị cấp trên</div>
            <div className={styles.dropdown}>
              <div className={styles.placeholderIcons}>
                <img
                  className={styles.outlineSearch2}
                  alt=""
                  src="/oval-copy-3.svg"
                />
                <div className={styles.label6}>Dropdown</div>
                <img
                  className={styles.outlineSearch2}
                  alt=""
                  src="/oval-copy-3.svg"
                />
              </div>
              <div className={styles.icons}>
                <img
                  className={styles.outlineSearch2}
                  alt=""
                  src="/oval-copy-3.svg"
                />
                <img
                  className={styles.keyboardArrowDownIcon}
                  alt=""
                  src="/keyboardarrowdown.svg"
                />
              </div>
            </div>
          </div>
          <div className={styles.multiselect}>
            <div className={styles.listElementParent}>
              <div className={styles.listElement}>
                <div className={styles.label}>Đơn vị cấp trên 1</div>
                <img
                  className={styles.fillCheckmark}
                  alt=""
                  src="/-fill--checkmark.svg"
                />
              </div>
              <div className={styles.listElement1}>
                <img
                  className={styles.outlineFile}
                  alt=""
                  src="/oval-copy-3.svg"
                />
                <div className={styles.label8}>Nguyễn Minh Hoàng</div>
                <img
                  className={styles.fillCheckmark1}
                  alt=""
                  src="/oval-copy-3.svg"
                />
              </div>
              <div className={styles.listElement2}>
                <img
                  className={styles.outlineFile}
                  alt=""
                  src="/oval-copy-3.svg"
                />
                <div className={styles.label9}>Đơn vị cấp trên 2</div>
                <img
                  className={styles.fillCheckmark1}
                  alt=""
                  src="/oval-copy-3.svg"
                />
              </div>
              <div className={styles.listElement1}>
                <img
                  className={styles.outlineFile}
                  alt=""
                  src="/oval-copy-3.svg"
                />
                <div className={styles.label8}>Đặng Hoàng Nam</div>
                <img
                  className={styles.fillCheckmark1}
                  alt=""
                  src="/oval-copy-3.svg"
                />
              </div>
              <div className={styles.listElement1}>
                <img
                  className={styles.outlineFile}
                  alt=""
                  src="/oval-copy-3.svg"
                />
                <div className={styles.label8}>Đặng Hoàng Nam</div>
                <img
                  className={styles.fillCheckmark1}
                  alt=""
                  src="/oval-copy-3.svg"
                />
              </div>
              <div className={styles.listElement2}>
                <img
                  className={styles.outlineFile}
                  alt=""
                  src="/oval-copy-3.svg"
                />
                <div className={styles.label9}>Đơn vị cấp trên 3</div>
                <img
                  className={styles.fillCheckmark1}
                  alt=""
                  src="/oval-copy-3.svg"
                />
              </div>
              <div className={styles.listElement2}>
                <img
                  className={styles.outlineFile}
                  alt=""
                  src="/oval-copy-3.svg"
                />
                <div className={styles.label9}>Đơn vị cấp trên 4</div>
                <img
                  className={styles.fillCheckmark1}
                  alt=""
                  src="/oval-copy-3.svg"
                />
              </div>
              <div className={styles.listElement2}>
                <img
                  className={styles.outlineFile}
                  alt=""
                  src="/oval-copy-3.svg"
                />
                <div className={styles.label9}>Đơn vị cấp trên 5</div>
                <img
                  className={styles.fillCheckmark1}
                  alt=""
                  src="/oval-copy-3.svg"
                />
              </div>
              <div className={styles.listElement1}>
                <img
                  className={styles.outlineFile}
                  alt=""
                  src="/oval-copy-3.svg"
                />
                <div className={styles.label8}>Nguyễn Minh Khôi</div>
                <img
                  className={styles.fillCheckmark1}
                  alt=""
                  src="/oval-copy-3.svg"
                />
              </div>
              <div className={styles.listElement1}>
                <img
                  className={styles.outlineFile}
                  alt=""
                  src="/oval-copy-3.svg"
                />
                <div className={styles.label8}>Nguyễn Minh Khôi</div>
                <img
                  className={styles.fillCheckmark1}
                  alt=""
                  src="/oval-copy-3.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.input5}>
          <div className={styles.label1}>Trạng thái</div>
          <div className={styles.input6}>
            <img
              className={styles.outlineSearch}
              alt=""
              src="/oval-copy-3.svg"
            />
            <div className={styles.label2}>Khóa</div>
            <img
              className={styles.outlineSearch}
              alt=""
              src="/oval-copy-3.svg"
            />
            <img
              className={styles.outlineClose}
              alt=""
              src="/oval-copy-3.svg"
            />
          </div>
        </div>
      </div>
      <div className={styles.modalfooter}>
        <div className={styles.icons}>
          <div className={styles.button}>
            <img
              className={styles.keyboardArrowRightIcon}
              alt=""
              src="/oval-copy-3.svg"
            />
            <div className={styles.text}>Hủy bỏ</div>
          </div>
          <div className={styles.filter}>
            <div className={styles.ucheckParent}>
              <img
                className={styles.keyboardArrowDownIcon}
                alt=""
                src="/ucheck.svg"
              />
              <div className={styles.spXpTheoParent}>
                <div className={styles.spXpTheo}>Sắp xếp theo</div>
                <div className={styles.mcU}>Cập nhật</div>
              </div>
            </div>
            <img
              className={styles.keyboardArrowRightIcon}
              alt=""
              src="/oval-copy-3.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalThmNV;
