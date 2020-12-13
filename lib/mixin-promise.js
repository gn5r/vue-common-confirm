export default {
  data: () => ({
    // Confirm用オブジェクト
    confirmObj: {
      dialog: false,
      title: "",
      titleIcon: "",
      titleColor: "",
      message: "",
      buttons: [],
    },
  }),

  // 関数定義
  methods: {
    /**
     * 確認用ダイアログを表示する
     * @param {String} message ダイアログ内に表示するメッセージ
     */
    confirm(message) {
      return new Promise((resolve) => {
        // ダイアログを表示するためのパラメーター設定
        this.confirmObj.title = "確認";
        this.confirmObj.titleIcon = "fas fa-info-circle";
        this.confirmObj.titleColor = "info";
        this.confirmObj.message = message;
        this.confirmObj.buttons = [
          {
            text: "はい",
            color: "info",
            outlined: false,
            function: () => {
              this.confirmObj.dialog = false;
              resolve(true);
            },
          },
          {
            text: "いいえ",
            color: "error",
            outlined: false,
            function: () => {
              this.confirmObj.dialog = false;
              resolve(false);
            },
          },
        ];

        // パラメーターの設定後、ダイアログを表示する
        this.confirmObj.dialog = true;
      });
    },

    /**
     * 警告ダイアログを表示する
     * @param {String} message ダイアログ内に表示するメッセージ
     */
    warning(message) {
      return new Promise((resolve) => {
        // ダイアログを表示するためのパラメーター設定
        this.confirmObj.title = "警告";
        this.confirmObj.titleIcon = "fas fa-exclamation-triangle";
        this.confirmObj.titleColor = "warning";
        this.confirmObj.message = message;
        this.confirmObj.buttons = [
          {
            text: "はい",
            color: "info",
            outlined: false,
            function: () => {
              this.confirmObj.dialog = false;
              resolve(true);
            },
          },
          {
            text: "いいえ",
            color: "error",
            outlined: false,
            function: () => {
              this.confirmObj.dialog = false;
              resolve(false);
            },
          },
        ];

        // パラメーターの設定後、ダイアログを表示する
        this.confirmObj.dialog = true;
      });
    },

    /**
     * エラーダイアログを表示する
     * @param {String} message ダイアログ内に表示するメッセージ
     */
    err(message) {
      return new Promise((resolve) => {
        // ダイアログを表示するためのパラメーター設定
        this.confirmObj.title = "エラー";
        this.confirmObj.titleIcon = "fas fa-exclamation-circle";
        this.confirmObj.titleColor = "error";
        this.confirmObj.message = message;
        this.confirmObj.buttons = [
          {
            text: "はい",
            color: "info",
            outlined: false,
            function: () => {
              this.confirmObj.dialog = false;
              resolve(true);
            },
          },
        ];
        // パラメーターの設定後、ダイアログを表示する
        this.confirmObj.dialog = true;
      });
    },

    /**
     * 処理完了ダイアログを表示する
     * @param {String} message ダイアログ内に表示するメッセージ
     */
    complete(message) {
      return new Promise((resolve) => {
        // ダイアログを表示するためのパラメーター設定
        this.confirmObj.title = "完了";
        this.confirmObj.titleIcon = "";
        this.confirmObj.titleColor = "success";
        this.confirmObj.message = message;
        this.confirmObj.buttons = [
          {
            text: "はい",
            color: "info",
            outlined: false,
            function: () => {
              this.confirmObj.dialog = false;
              resolve(true);
            },
          },
        ];
        // パラメーターの設定後、ダイアログを表示する
        this.confirmObj.dialog = true;
      });
    },

    /**
     * vue-common-confirm版alert関数
     * @param {String} message ダイアログ内に表示するメッセージ
     */
    modal(message) {
      return new Promise((resolve) => {
        // ダイアログを表示するためのパラメーター設定
        this.confirmObj.title = "";
        this.confirmObj.titleIcon = "";
        this.confirmObj.titleColor = "";
        this.confirmObj.message = message;
        this.confirmObj.buttons = [
          {
            text: "はい",
            color: "info",
            outlined: false,
            function: () => {
              this.confirmObj.dialog = false;
              resolve(true);
            },
          },
        ];
        // パラメーターの設定後、ダイアログを表示する
        this.confirmObj.dialog = true;
      });
    },

    /**
     * 警告モーダルを表示する
     * @param {String} message ダイアログ内に表示するメッセージ
     */
    warn(message) {
      return new Promise((resolve) => {
        // ダイアログを表示するためのパラメーター設定
        this.confirmObj.title = "警告";
        this.confirmObj.titleIcon = "fas fa-exclamation-triangle";
        this.confirmObj.titleColor = "warning";
        this.confirmObj.message = message;
        this.confirmObj.buttons = [
          {
            text: "はい",
            color: "info",
            outlined: false,
            function: () => {
              this.confirmObj.dialog = false;
              resolve(true);
            },
          },
        ];

        // パラメーターの設定後、ダイアログを表示する
        this.confirmObj.dialog = true;
      });
    },
  },
};
