module.exports.flex_news_tw = function flex_news_tw(array) {
  let text = {
    "type": "flex",
    "altText": "this is a flex message",
    "quickReply": {
      "items": [
        {
          "type": "action",
          "action": {
            "type": "message",
            "label": "頭條新聞",
            "text": "頭條新聞"
          }
        },
        {
          "type": "action",
          "action": {
            "type": "message",
            "label": "理財新聞",
            "text": "理財新聞"
          }
        },
        {
          "type": "action",
          "action": {
            "type": "message",
            "label": "期貨新聞",
            "text": "期貨新聞"
          }
        },
        {
          "type": "action",
          "action": {
            "type": "message",
            "label": "房產新聞",
            "text": "房產新聞"
          }
        },
        {
          "type": "action",
          "action": {
            "type": "message",
            "label": "外匯新聞",
            "text": "外匯新聞"
          }
        }
      ]
    },
    "contents": {
      "type": "bubble",
      "header": {
        "type": "box",
        "layout": "vertical",
        "contents": [
          {
            "type": "text",
            "text": "台股新聞",
            "size": "35px",
            "weight": "bold",
            "align": "center"
          }
        ]
      },
      "hero": {
        "type": "image",
        "url": "https://lh3.googleusercontent.com/UnI8DpJvSz6tC9eD9nF6lBpvqkR2hyUy5J4bwb4yalCqfFXWIcZxZNUtmCAkIxlT8xWT9DGHcsKC6ZTpe-CvqBuIfaEdwH4jm598uog9mE4AZETWEyRF2zZdmCYDbhpcTbvryND8K0fBePYOfmwYjI-HbBchVK7ftdvMxOEbY80BRjQtRMUUfJe_I5MAdjjFa1optzBWG0wINfAbhtFdaLMX4LkEuPdxIqUhVph12xmNmMxXdaLZRZxA6kl9ZUMgqtWEgTtVaJggbI4F4u6JQ65ZbcOfG-56gongAOCGEGUDwElOdPgxCncZFOql5jxJmfc_5s5UOkA656owSydnTxv0HtkzrFXqLOPKPYySfg7FL-Furv8n57AHQwc2fr4842MgBftKMrCE8743J2tvW3Ml4GSi52hLEPHLbk2aFYxD43yxC8lxhUAKpaYfQkoKBu188y52wZpl70MAwIXGf-cUU6rmk8Wx4u9n2WGiezv2v5VRHf2piFBaHBddsNOW-wSdlKGLE3qYxVLlMO_KD0PgL974tgzA28UUSAGOgBlhcatal-F0wtMz6mIwScW0Z73vPxfWmXlG_ufnl9rTPgBolPPWT7sgzBJxkKYubVWTGBzlDtfi3AJLvzAsRHkNC6Qd-VifpSH4pCV3ivzBkpwOiTT9H8diZQ5P29mfZdpkJiflM43iyCgcV-P50Qe16MDgJE7pCZOg3GBB2fJC4QpX=w600-h390-no?authuser=0",
        "size": "full",
        "aspectRatio": "20:13",
        "aspectMode": "cover",
        "action": {
          "type": "uri",
          "uri": "http://linecorp.com/"
        }
      },
      "footer": {
        "type": "box",
        "layout": "vertical",
        "spacing": "sm",
        "contents": [
          {
            "type": "button",
            "style": "link",
            "height": "sm",
            "action": {
              "type": "uri",
              "label": array[0][0],
              "uri": array[0][1]
            }
          },
          {
            "type": "button",
            "style": "link",
            "height": "sm",
            "action": {
              "type": "uri",
              "label": array[1][0],
              "uri": array[1][1]
            }
          },
          {
            "type": "button",
            "action": {
              "type": "uri",
              "label": array[2][0],
              "uri": array[2][1]
            }
          },
          {
            "type": "spacer",
            "size": "sm"
          }
        ],
        "flex": 0
      }
    }
  }
  return text
}
module.exports.flex_news_house = function flex_news_house(array) {
  let text = {
    "type": "flex",
    "altText": "this is a flex message",
    "quickReply": {
      "items": [
        {
          "type": "action",
          "action": {
            "type": "message",
            "label": "頭條新聞",
            "text": "頭條新聞"
          }
        },
        {
          "type": "action",
          "action": {
            "type": "message",
            "label": "台股新聞",
            "text": "台股新聞"
          }
        },
        {
          "type": "action",
          "action": {
            "type": "message",
            "label": "理財新聞",
            "text": "理財新聞"
          }
        },
        {
          "type": "action",
          "action": {
            "type": "message",
            "label": "期貨新聞",
            "text": "期貨新聞"
          }
        },
        {
          "type": "action",
          "action": {
            "type": "message",
            "label": "外匯新聞",
            "text": "外匯新聞"
          }
        }
      ]
    },
    "contents": {
      "type": "bubble",
      "header": {
        "type": "box",
        "layout": "vertical",
        "contents": [
          {
            "type": "text",
            "text": "房產新聞",
            "size": "35px",
            "weight": "bold",
            "align": "center"
          }
        ]
      },
      "hero": {
        "type": "image",
        "url": "https://lh3.googleusercontent.com/qmoKXI8B4QBs6C2rKL-IKewWugzHGOocbjIFlsrAWVdikXGLhBxE76rjEKfvhkjbQpu2NOvqxUcDn7Mo3U85Wo1TtDgZoYNCd2wX2u3XIwp-Qxe-ZA-TTXMo8QvWPEx4rGIGzSvf8Hul7_n_Au1uhxhtjxJKlDYwe0ooJpaQJ-hRhkrNXnsa65KMo3tPsMWtcKrS_iLbrU6yfDFrDibVC6kHMxwBzqq5GVZ7UxuyW6RZId-lmQNgah1NpfRQiqs4VcITt0rw0vudTlAErqOyLsh0Juyl3sn2tbCW_QOOx4iHnP1CSNCxbW5dSdXfVbRtaWSkTl0MubhXizoNYotAUO9raTN7G1fSal72N6An6HfIQdYDpmdeUjDyPp9o49sUHfrwvZJtbp39xFMW8iWAMpa7RWV3FR3dM8EPRIb97AgwLvQ9-3znnK5tR6dCN6XGVPeX5YdH_RW7X32HtxhEOygNiW3g-4tRG9-LUOiMnZQDZ0qpQjWi43bsUv4WV6x1o0PwpmmD6QKAT2cmxYyOxHLE0YSyvuGEKKIjATZkWxgmyr8zL5Pb7UYxEJyfjBj8RG3dteVLaqUjYQNt2jxSaSstZkZjAtmwKT6lU51Tr5_t46vZemEpH_Lg5IJpgEPKhLJICCOcNe_0ytjWLOezlRl_DlZjMnwDU5LXSNi8D-OGyS3iPOmcDU8hea11kfIEPdSbcUtxqcCqZ3XhD2MIXxaH=w600-h390-no?authuser=0",
        "size": "full",
        "aspectRatio": "20:13",
        "aspectMode": "cover",
        "action": {
          "type": "uri",
          "uri": "http://linecorp.com/"
        }
      },
      "footer": {
        "type": "box",
        "layout": "vertical",
        "spacing": "sm",
        "contents": [
          {
            "type": "button",
            "style": "link",
            "height": "sm",
            "action": {
              "type": "uri",
              "label": array[0][0],
              "uri": array[0][1]
            }
          },
          {
            "type": "button",
            "style": "link",
            "height": "sm",
            "action": {
              "type": "uri",
              "label": array[1][0],
              "uri": array[1][1]
            }
          },
          {
            "type": "button",
            "action": {
              "type": "uri",
              "label": array[2][0],
              "uri": array[2][1]
            }
          },
          {
            "type": "spacer",
            "size": "sm"
          }
        ],
        "flex": 0
      }
    }
  }
  return text
}
module.exports.flex_news_headline = function flex_news_headline(array) {
  let text = {
    "type": "flex",
    "altText": "this is a flex message",
    "quickReply": {
      "items": [
        {
          "type": "action",
          "action": {
            "type": "message",
            "label": "台股新聞",
            "text": "台股新聞"
          }
        },
        {
          "type": "action",
          "action": {
            "type": "message",
            "label": "理財新聞",
            "text": "理財新聞"
          }
        },
        {
          "type": "action",
          "action": {
            "type": "message",
            "label": "期貨新聞",
            "text": "期貨新聞"
          }
        },
        {
          "type": "action",
          "action": {
            "type": "message",
            "label": "房產新聞",
            "text": "房產新聞"
          }
        },
        {
          "type": "action",
          "action": {
            "type": "message",
            "label": "外匯新聞",
            "text": "外匯新聞"
          }
        }
      ]
    },
    "contents": {
      "type": "bubble",
      "header": {
        "type": "box",
        "layout": "vertical",
        "contents": [
          {
            "type": "text",
            "text": "頭條新聞",
            "size": "35px",
            "weight": "bold",
            "align": "center"
          }
        ]
      },
      "hero": {
        "type": "image",
        "url": "https://lh3.googleusercontent.com/SsZ6yOHDE_rIbLzoQDitpAHcl0s5_a2cktCBtvCFwSLlu5Uozd9qZheZVE8a3GScq1myh6qIiDH_-QbfLZ_dfvOLlFtBMANgydScqPo5nIbElOrA88XeTe3fvixCdtiSEX4703t3xxyIeD2Tmo_zh2vwCOY-iK97FVec64qlY11t2krs-a2eihZq1YXASk_FpGW9MY8T_6DbrR20jRi3XLwTR-vEhr3aAfP38g99bZ5MuXhhtxDnRY40uS9pBhc4IQC2SG83f6-CyjqufOYsPpcPSG4kxp7vKu_dANlJe0gdnVf6iUKjOc1skw20oY14Bz-u4LMEsfP4BZCcOfWLC3FqJgZKXJYFsEucZiyzacuxcutDhgQg49-GfdhUpGBaaeZXYCzDfCe4F9AttcErobyiWAIS19r4Q2o1udHCVWvZfBlove_Rq09kuRrMYZDsBfiRzVAJwtP2Sf1V9Dqy1DfH7CNbArvktl6_Y3q0ICVG_evl6uIe3QQbZVg_GwPPmUL8oeC4pfGtmofVXCE_oJKIB3Nt5-bmroBV9riWheSmNWgh1Fc8E3E1ixubR87evozke5Ear1jyE1vXVTcCF9NEfIuerC5N9v_2Cz81FggNCPpwnwrkN66CbzEquDrjmPPDoHl_NiWuIqw9CrQWBazsMpIfy_CO5-cYupTVZi4fxi5HUNjMSaakXKVCDvA0C9NEu2UlVztSiFr9sUmaEcJ0=w600-h390-no?authuser=0",
        "size": "full",
        "aspectRatio": "20:13",
        "aspectMode": "cover",
        "action": {
          "type": "uri",
          "uri": "http://linecorp.com/"
        }
      },
      "footer": {
        "type": "box",
        "layout": "vertical",
        "spacing": "sm",
        "contents": [
          {
            "type": "button",
            "style": "link",
            "height": "sm",
            "action": {
              "type": "uri",
              "label": array[0][0],
              "uri": array[0][1]
            }
          },
          {
            "type": "button",
            "style": "link",
            "height": "sm",
            "action": {
              "type": "uri",
              "label": array[1][0],
              "uri": array[1][1]
            }
          },
          {
            "type": "button",
            "action": {
              "type": "uri",
              "label": array[2][0],
              "uri": array[2][1]
            }
          },
          {
            "type": "spacer",
            "size": "sm"
          }
        ],
        "flex": 0
      }
    }
  }
  return text
}
module.exports.flex_news_forex = function flex_news_forex(array) {
  let text = {
    "type": "flex",
    "altText": "this is a flex message",
    "quickReply": {
      "items": [
        {
          "type": "action",
          "action": {
            "type": "message",
            "label": "頭條新聞",
            "text": "頭條新聞"
          }
        },
        {
          "type": "action",
          "action": {
            "type": "message",
            "label": "台股新聞",
            "text": "台股新聞"
          }
        },
        {
          "type": "action",
          "action": {
            "type": "message",
            "label": "理財新聞",
            "text": "理財新聞"
          }
        },
        {
          "type": "action",
          "action": {
            "type": "message",
            "label": "期貨新聞",
            "text": "期貨新聞"
          }
        },
        {
          "type": "action",
          "action": {
            "type": "message",
            "label": "房產新聞",
            "text": "房產新聞"
          }
        }
      ]
    },
    "contents": {
      "type": "bubble",
      "header": {
        "type": "box",
        "layout": "vertical",
        "contents": [
          {
            "type": "text",
            "text": "外匯新聞",
            "size": "35px",
            "weight": "bold",
            "align": "center"
          }
        ]
      },
      "hero": {
        "type": "image",
        "url": "https://lh3.googleusercontent.com/OxiOprsAswwGCvsHyW9jeJtx2-joTe6G-3kFubVZ9BHDWM42l4L0IBsDLYQsKI54zQ8fDdv1bJsyCg5J3yV1LqW45z5K28bYUmek8hAW1hFL50iqK8wN4CbbbeTMzGUH7kZYkdiYVDdgHkaEcDnm7sIxyJ1hk1pGpfy1vdKaeMlwPetnEDhxmstk1or7ZsyWnQstYcTZUtfRxkeurrLHP7R5XQUonxIj2HCnnMc2ZQ1u6ZaUY2Xp6JCQLzeeL0MhGhPpKXLkuLWk55sLSqsQ0oAQdLIPLf4-6y5i6mZ1bW-Yw2-BJDODj5yPcROOh-1xCt15qTexC7NT33NXaMhJuRh7GF2vROmpTvZqmGU3RG-hH5gRf-DefxOfjPeCPqBbX5yvZLNvBH6G01C51awT-EERjRx07FUXLxq6hqZff8NVFZcmwxfnirRuIgQaEADv2Q2qK-a3fdLB6DuvreF0tPQUFVhyU-WE3ijgSvoMztKytkqTX7Xvvspk8rOhUTxkS16tdDpx98njSPEAzq6pHXpCmeZnHn9u-UxnOU4a3mUsHtz2o3H4vygGv-_Vj90GAOWnQ2RgBDcosHBgZTy3RtnF6g2c-e3YZF3XNKSGFW6n8JM1dj0FuDZfl5ah9geJCzQDX-qDwDDCTtLmAY91TmvCboBhiwAhjCg0yInQK9tlt78erbLaA1YMdq3mIj3tGk6nuqiuf_lFRhaoQiJTGk6s=w600-h390-no?authuser=0",
        "size": "full",
        "aspectRatio": "20:13",
        "aspectMode": "cover",
        "action": {
          "type": "uri",
          "uri": "http://linecorp.com/"
        }
      },
      "footer": {
        "type": "box",
        "layout": "vertical",
        "spacing": "sm",
        "contents": [
          {
            "type": "button",
            "style": "link",
            "height": "sm",
            "action": {
              "type": "uri",
              "label": array[0][0],
              "uri": array[0][1]
            }
          },
          {
            "type": "button",
            "style": "link",
            "height": "sm",
            "action": {
              "type": "uri",
              "label": array[1][0],
              "uri": array[1][1]
            }
          },
          {
            "type": "button",
            "action": {
              "type": "uri",
              "label": array[2][0],
              "uri": array[2][1]
            }
          },
          {
            "type": "spacer",
            "size": "sm"
          }
        ],
        "flex": 0
      }
    }
  }
  return text
}
module.exports.flex_news_future = function flex_news_future(array) {
  let text = {
    "type": "flex",
    "altText": "this is a flex message",
    "quickReply": {
      "items": [
        {
          "type": "action",
          "action": {
            "type": "message",
            "label": "頭條新聞",
            "text": "頭條新聞"
          }
        },
        {
          "type": "action",
          "action": {
            "type": "message",
            "label": "台股新聞",
            "text": "台股新聞"
          }
        },
        {
          "type": "action",
          "action": {
            "type": "message",
            "label": "理財新聞",
            "text": "理財新聞"
          }
        },
        {
          "type": "action",
          "action": {
            "type": "message",
            "label": "房產新聞",
            "text": "房產新聞"
          }
        },
        {
          "type": "action",
          "action": {
            "type": "message",
            "label": "外匯新聞",
            "text": "外匯新聞"
          }
        }
      ]
    },
    "contents": {
      "type": "bubble",
      "header": {
        "type": "box",
        "layout": "vertical",
        "contents": [
          {
            "type": "text",
            "text": "期貨新聞",
            "size": "35px",
            "weight": "bold",
            "align": "center"
          }
        ]
      },
      "hero": {
        "type": "image",
        "url": "https://lh3.googleusercontent.com/4IKW1yF6Wej39wg2oqC0NxBkLosKgi_AqXQNSlwOZ4aQjor4ppz-s3VEMH7JEIYNLqwL1NQ4jzuvwiNjpZo7HacPBlkhM7t-r3PPvOFGVATeBgl78mClA6_8W3gLD74PXHKeAQ3roCM6wY_17Un9FzMdO7cuE07Uw0863r1mnO5TLDjyyzcaAR7_MToneHdj8VNQm4Zpp-GfT5jAvCEYgKMYvIUWyY-ry9Likwa4dWXJZVySG6xiIQmlMnlW-Jl7WHES9G0x8xHUlxaTVxxKLxvcrcnOS4I3j06RtFC7ZmQB6X6_VxNnrt7dSIWEQth7rVQGxV6RjP5Lflizb8lXVnAZ9wJdvkYdK_pKr9pIlxvxTX4NOz4WHJ7cP23vqLqGlTBAaxDHIXZhtxntq_TCPI-dqPvV3NmTpiCWRl_moUeTzVeY-laq-KfBvorLRUAX5KRk_IEPflgrPkB0CWhl9ptXgK0wdhL8rpjc8gj9r_-XouXpw6UPMg8Ym7czCp6WuZh9A4-2AiZqQ4fUEeHkVcf_hCOtzM822XNuUr3ibA7ErgMmWYGB-TxTMknZijwW6J-HPOWdyIW2G4RrJq0z8sndCTo-44qHy3LD7mpcWQKZqgyCqmtrUH5rWATLDM5_Ym-ti2w4xN-To2fnIfDU-32n2HFYq_8Qjk57gKDhREiv4OUrs9SvKNUIK-7tE6iCj352UDTBEQitWrDs4TsZlrHH=w600-h390-no?authuser=0",
        "size": "full",
        "aspectRatio": "20:13",
        "aspectMode": "cover",
        "action": {
          "type": "uri",
          "uri": "http://linecorp.com/"
        }
      },
      "footer": {
        "type": "box",
        "layout": "vertical",
        "spacing": "sm",
        "contents": [
          {
            "type": "button",
            "style": "link",
            "height": "sm",
            "action": {
              "type": "uri",
              "label": array[0][0],
              "uri": array[0][1]
            }
          },
          {
            "type": "button",
            "style": "link",
            "height": "sm",
            "action": {
              "type": "uri",
              "label": array[1][0],
              "uri": array[1][1]
            }
          },
          {
            "type": "button",
            "action": {
              "type": "uri",
              "label": array[2][0],
              "uri": array[2][1]
            }
          },
          {
            "type": "spacer",
            "size": "sm"
          }
        ],
        "flex": 0
      }
    }
  }
  return text
}
module.exports.flex_news_money = function flex_news_money(array) {
  let text = {
    "type": "flex",
    "altText": "this is a flex message",
    "quickReply": {
      "items": [
        {
          "type": "action",
          "action": {
            "type": "message",
            "label": "頭條新聞",
            "text": "頭條新聞"
          }
        },
        {
          "type": "action",
          "action": {
            "type": "message",
            "label": "台股新聞",
            "text": "台股新聞"
          }
        },
        {
          "type": "action",
          "action": {
            "type": "message",
            "label": "期貨新聞",
            "text": "期貨新聞"
          }
        },
        {
          "type": "action",
          "action": {
            "type": "message",
            "label": "房產新聞",
            "text": "房產新聞"
          }
        },
        {
          "type": "action",
          "action": {
            "type": "message",
            "label": "外匯新聞",
            "text": "外匯新聞"
          }
        }
      ]
    },
    "contents": {
      "type": "bubble",
      "header": {
        "type": "box",
        "layout": "vertical",
        "contents": [
          {
            "type": "text",
            "text": "理財新聞",
            "size": "35px",
            "weight": "bold",
            "align": "center"
          }
        ]
      },
      "hero": {
        "type": "image",
        "url": "https://lh3.googleusercontent.com/7C0apmCJgZ1HO2nfSUFtfv3_HbulPtkc53drS46o8YOKjd0UsLx7Qhj_vm8GBBGd2dgz9dUxhrdyY4-4SlJ6z8YNCIOOYxIChR6epOlmaAiNkLFuubGXvygZ_Wy17Xa3rlBfVOxB4U1-APx3PkswtNU79J_PPcqkqEH6cIJQDKhuaZ8SjJ4XXMjzAKZmdlOljbl5OwyIXf5cxyhz1qP_B2lyGSBWfmR2vSmF_3pYTAXwUs1wqzfTYsFK5UcKBje0Bo3FB9otaEWXXy0xUJJw8qpW8j8Zgu5ZKg2r8plMG9yjVXAx8d2paX5TgaI1ObKoLJ0o6b5iSAYR_oSkAKMvWK50CeUgxpGjXzuu1LCUqdC00LweZbGhhfLPdIt7GlmnENg3f9hKfLtGHy2xUuKIX78IlWayDB__USQhcbeOCBTkDmljMnpgtZrbEKpXmtJiX-DoKhu_Q_Z-cHw1ohGtgQX3u9O0rmps9Ke5EDqFxl15VV7nRzruHc9yX6Llust52jKPz8ioHj1KqfiOrLTdx3lqk3o10sPjY_gHB8hkojWBRKsuRc4eb7nDqt_hNoBjzaEG1CyKILdvSVkkYzIZAkFrBxxbnv6eMlC6nsBlvyxN0Z6oqr0DOEbjyrtKtGwSnipUl6nfIT6AAvMYpKVhrtGJs1cPflo00_RnnXUcVhNlh6nxEzX-z9EYX7SxFoO0U2_mcMAV5VRsb_f5iS0_8jVF=w600-h390-no?authuser=0",
        "size": "full",
        "aspectRatio": "20:13",
        "aspectMode": "cover",
        "action": {
          "type": "uri",
          "uri": "http://linecorp.com/"
        }
      },
      "footer": {
        "type": "box",
        "layout": "vertical",
        "spacing": "sm",
        "contents": [
          {
            "type": "button",
            "style": "link",
            "height": "sm",
            "action": {
              "type": "uri",
              "label": array[0][0],
              "uri": array[0][1]
            }
          },
          {
            "type": "button",
            "style": "link",
            "height": "sm",
            "action": {
              "type": "uri",
              "label": array[1][0],
              "uri": array[1][1]
            }
          },
          {
            "type": "button",
            "action": {
              "type": "uri",
              "label": array[2][0],
              "uri": array[2][1]
            }
          },
          {
            "type": "spacer",
            "size": "sm"
          }
        ],
        "flex": 0
      }
    }
  }
  return text
}
module.exports.flex_news_2330 = function flex_news_2330(array) {
  let text = {
    "type": "flex",
    "altText": "this is a flex message",
    "contents": {
      "type": "bubble",
      "header": {
        "type": "box",
        "layout": "vertical",
        "contents": [
          {
            "type": "text",
            "text": "台積電新聞",
            "size": "35px",
            "weight": "bold",
            "align": "center"
          }
        ]
      },
      "hero": {
        "type": "image",
        "url": "https://lh3.googleusercontent.com/yfVbgIWu1QVZtcS1NunZbSWbZN-RzOWT8f9kNd4YdEoxao-RACBBsWef4N7BdzOiXRAsUlGFKh26wym4tIl4xlWf8vxwHqdCyPQcJ6APRG6lhmflKBhUzlrIfefkDrK4poCmVfeCcmI09O6LDaz5bEdIhDF1F-MGouGDWQd80RbO4eBbq2PPUzziQiYjPre-3GsgnTNA1OYWzS4BNPXrrcWPpOm4amcLFif_3MskA8RoXIU7YLY9bbRs7x2wuHT5MKPlDJxwffqntv-1Qd4Q_WcR5ghZz8vsKBvhPtxOe1O589n1_9-SMvt1o6xlXPU7w6u7hOnLOdn5yb1JGK7brriPOgqj2C3igH7sPCjcNC8InuZ-wGwUE369bSW40t0v3ja0CJm5nJnqcUIYEGDMbVqMDbkGQshUpkFFJSnu6FwPhhz2X-2I9AsNqUIUj-21IAfDzFqZiglFAVRtqIhLQNIa-Yn6Io2KZLilw0ZLyxLkRk3XnuKLCfIa2Iw3zkOo4NiQEjNpc8BCEEn722BCBD5Db46acg7JjqMsKLdNyigi3KMiQYwE8hHNi7fXBL89cOUua-kWL_ibfvAURKdS_1Bq7WcrTWwLuK0y8lDI5soQmAF8KvJrO_Vd0hzWlqggcdpbubi306P8-0-KmSwTxbqduNwG6itIDQvj8wA3JnPDVFUjcXgzBSOhZp9GHzcgfzqaqC3WD5qq1eofUKNgAVJn=w600-h390-no?authuser=0",
        "size": "full",
        "aspectRatio": "20:13",
        "aspectMode": "cover",
        "action": {
          "type": "uri",
          "uri": "http://linecorp.com/"
        }
      },
      "footer": {
        "type": "box",
        "layout": "vertical",
        "spacing": "sm",
        "contents": [
          {
            "type": "button",
            "style": "link",
            "height": "sm",
            "action": {
              "type": "uri",
              "label": array[0][0],
              "uri": array[0][1]
            }
          },
          {
            "type": "button",
            "style": "link",
            "height": "sm",
            "action": {
              "type": "uri",
              "label": array[1][0],
              "uri": array[1][1]
            }
          },
          {
            "type": "button",
            "action": {
              "type": "uri",
              "label": array[2][0],
              "uri": array[2][1]
            }
          },
          {
            "type": "spacer",
            "size": "sm"
          }
        ],
        "flex": 0
      }
    }
  }
  return text
}
module.exports.flex_news_2317 = function flex_news_2317(array) {
  let text = {
    "type": "flex",
    "altText": "this is a flex message",
    "contents": {
      "type": "bubble",
      "header": {
        "type": "box",
        "layout": "vertical",
        "contents": [
          {
            "type": "text",
            "text": "鴻海新聞",
            "size": "35px",
            "weight": "bold",
            "align": "center"
          }
        ]
      },
      "hero": {
        "type": "image",
        "url": "https://lh3.googleusercontent.com/0KLgjsBlOSbuKYsIRcsHO9ELG88GwmRK73jzCCV0swiMMj07THgi6STA83L4duDkbPYfKt9Yx49ayZc5Yqa8A5O4RepBgsz-L-J4msubuGpt1f5D_EhdjmUetfooudUjm6DQj6tnEPPDH3MouDhayqZip9uNiGlEm9A2z-j-zO_8EvC8m-dheo0rRMc8KOJdTTL-bVwS49TbGH9_ufRCxq9QmXWP6axTdhXU5QApswZc4bYPgsmgm4BblVjmmJcxUlkR1v8AqL51K9A1F3PcwKUDdL4Gf3CZmbUDih1N77I9I7dewtpAaR59Cb6afdJselLucse5JXz7hJuZ-LN08pYz-cl7OOIng-5JYACQ4ucEk89dLa3i3ERCqOTp-X2Oc74FM7cWgzl9Rvyy7Mhca1PlsEo-LQ157k22vAzp85Epd8hWvPIFZIIly_2NGcOeetRjBPhV2KjefP3_oYB0x6ON0eOm59vAbD80bE1Y6a_f2aAkAViV7WUTbCbcLaVRCTkeAQRO4BgjWRVhRkiJe0z3OyjSSkAUwl-TMNyEzQsANX-6ZbRjKTGHRF6gzrW-e2WDPUb0QMqzjLLyU3dm8AxkoxDJVdciS1O3YZUA2lD03ze3OOpngAn_-gronLcCwAZhE6pDk3O0PoUA1mMZ1T9gUAtUxTSD08j4ybENx03AfJlyuz-irayPwAfcfOe7apclN-moOMaXHDe3DmjiETN3=w600-h390-no?authuser=0",
        "size": "full",
        "aspectRatio": "20:13",
        "aspectMode": "cover",
        "action": {
          "type": "uri",
          "uri": "http://linecorp.com/"
        }
      },
      "footer": {
        "type": "box",
        "layout": "vertical",
        "spacing": "sm",
        "contents": [
          {
            "type": "button",
            "style": "link",
            "height": "sm",
            "action": {
              "type": "uri",
              "label": array[0][0],
              "uri": array[0][1]
            }
          },
          {
            "type": "button",
            "style": "link",
            "height": "sm",
            "action": {
              "type": "uri",
              "label": array[1][0],
              "uri": array[1][1]
            }
          },
          {
            "type": "button",
            "action": {
              "type": "uri",
              "label": array[2][0],
              "uri": array[2][1]
            }
          },
          {
            "type": "spacer",
            "size": "sm"
          }
        ],
        "flex": 0
      }
    }
  }
  return text
}
module.exports.flex_news_2377 = function flex_news_2377(array) {
  let text = {
    "type": "flex",
    "altText": "this is a flex message",
    "contents": {
      "type": "bubble",
      "header": {
        "type": "box",
        "layout": "vertical",
        "contents": [
          {
            "type": "text",
            "text": "微星新聞",
            "size": "35px",
            "weight": "bold",
            "align": "center"
          }
        ]
      },
      "hero": {
        "type": "image",
        "url": "https://lh3.googleusercontent.com/1eETueuAZEnDIaeXTz_ga8emMnr9NjkKQJCXM1iDVy38qyddogDPD3ypV6E4sZQU5J-vnJz388Ipi40dKjBPaDHm6WL9FUC3EAAezg_iH8jfW1dvbxcIOQzvtDRt5Ns63gLoIjIV5LED8WpQEx6_8-0zKWFF2aI1esBDVcvv0AeKmqyyJCIvAaeLyqDCCuW1rCGLvWWUXf1AmVGFQVq_btAFufC3o9UKCVk0z2Q9Vs8BkaSFkVDDuQ4ewHI_BasibCPS-8ROq7Qmtvt3dABpQ98XV2cs60V_GT_cui6JUXsKlTtnrNLXmZwISh7XI_CuTAG5yXQ3YgnWgeX-PR7ZIYXCRudv3nCLv3wQg0jcvSG_z9WEyhRAOe-h6DbIzlp2wnN8qYd7fCFLmqJvA6XPLysLJf2em8urHtirbF1_wmovPpEquNOxesB6U6n5fsA8P46OLpV0QlPWeDxZbzT_ugOSSo6t0N_Xas7Kycmu5NsAUzzo3iCphUWFw8tfHM5St2fDwH9sCEuRMHH7O4qEbcPdYUAkTZjy8KMfa0MciE9CT5klCMTJgx03LHGE95I7CXXlXyXgIh7HDACEnqvZgrlTri3YM1FUgc94Sqg-CbHct84gZSJVd4-NHOUgIeXhcC9rasxyAvw0x3KkgxEfQZ6ZKFCHKOF67vTtxKAr7mop374hSwDWLXrxJH5VRSPfgET1WyFY7FX5wKrej8e66o0j=w600-h390-no?authuser=0",
        "size": "full",
        "aspectRatio": "20:13",
        "aspectMode": "cover",
        "action": {
          "type": "uri",
          "uri": "http://linecorp.com/"
        }
      },
      "footer": {
        "type": "box",
        "layout": "vertical",
        "spacing": "sm",
        "contents": [
          {
            "type": "button",
            "style": "link",
            "height": "sm",
            "action": {
              "type": "uri",
              "label": array[0][0],
              "uri": array[0][1]
            }
          },
          {
            "type": "button",
            "style": "link",
            "height": "sm",
            "action": {
              "type": "uri",
              "label": array[1][0],
              "uri": array[1][1]
            }
          },
          {
            "type": "button",
            "action": {
              "type": "uri",
              "label": array[2][0],
              "uri": array[2][1]
            }
          },
          {
            "type": "spacer",
            "size": "sm"
          }
        ],
        "flex": 0
      }
    }
  }
  return text
}
module.exports.flex_news_2379 = function flex_news_2379(array) {
  let text = {
    "type": "flex",
    "altText": "this is a flex message",
    "contents": {
      "type": "bubble",
      "header": {
        "type": "box",
        "layout": "vertical",
        "contents": [
          {
            "type": "text",
            "text": "瑞昱新聞",
            "size": "35px",
            "weight": "bold",
            "align": "center"
          }
        ]
      },
      "hero": {
        "type": "image",
        "url": "https://lh3.googleusercontent.com/We8r-BX3ClbZBQE-XnL5REcNdioluAhBPvHJLQxdq2FvuQxsAiZCzAViNSz0qAQ_IHKV1aHzKo0elO7izvBprvIx2rpp6oVRDLwYRrSuMrx5L-KyiO6zvVy_se0hWsKY4rhpavI47XFMBOTvKtSBaONEPFETJwdLRMX8IBI1Au5bS2U5fECrdDvyy7VgPnIi_pI8Ph40ROIg-n363DTwoMZTNRGN7hyhfCfBk3t94EGxtUYZuqceMaMnN9CmPr2-hc4DEqmN5IVecV_8YMqLzcdqtRykGIwD_oN3d1bzxZqE0_QkhDVduMaFItlDjXYf2HICK_B15RN68lJ1islV7y5bq1kVrSqlHu8glySXvXQg8Ltq3M__AlgZDawnU4ZbW0-yBG2WBdwgX9Gqz_zsbj37RBDzNvYKaMWQLqNLsDOjxtRQePCGkN9ysaBvbaMk4fK1d7gbaDa7JMtpV8q_6BNqqjyIeQVegdjNOY4ICNAQJ9L-PWJgGKtqUJCcqaBqzrpofYSJyYJsnq2Ptb9il0xyQnBWT-QzZekwzSB_zBXfk2LAYGSEkGfUTKY489QtYUBYTDTWP1OWLe4uWdAPPb3aQe7vKGbsqT5q0xtTTC-DMLCIaeoPCajZ2dxwtgA5rmFmakzQo5l-3vMh05BP8jUKyCpSkvy8NQikt8kvnSWHa9y4AbwlN29YGbQjhtw3XkugbVgzrryzE9HB3DOqzppv=w600-h390-no?authuser=0",
        "size": "full",
        "aspectRatio": "20:13",
        "aspectMode": "cover",
        "action": {
          "type": "uri",
          "uri": "http://linecorp.com/"
        }
      },
      "footer": {
        "type": "box",
        "layout": "vertical",
        "spacing": "sm",
        "contents": [
          {
            "type": "button",
            "style": "link",
            "height": "sm",
            "action": {
              "type": "uri",
              "label": array[0][0],
              "uri": array[0][1]
            }
          },
          {
            "type": "button",
            "style": "link",
            "height": "sm",
            "action": {
              "type": "uri",
              "label": array[1][0],
              "uri": array[1][1]
            }
          },
          {
            "type": "button",
            "action": {
              "type": "uri",
              "label": array[2][0],
              "uri": array[2][1]
            }
          },
          {
            "type": "spacer",
            "size": "sm"
          }
        ],
        "flex": 0
      }
    }
  }
  return text
}
module.exports.flex_news_2383 = function flex_news_2383(array) {
  let text = {
    "type": "flex",
    "altText": "this is a flex message",
    "contents": {
      "type": "bubble",
      "header": {
        "type": "box",
        "layout": "vertical",
        "contents": [
          {
            "type": "text",
            "text": "台光電新聞",
            "size": "35px",
            "weight": "bold",
            "align": "center"
          }
        ]
      },
      "hero": {
        "type": "image",
        "url": "https://lh3.googleusercontent.com/vmEsuUwtRXfvODzl7FFyfwCvFX00Goh2c6If8VMxDfG5Spzm1jZy8ClMAFkRCkgpJ3h0fwCuQwp-Y3A9vurwM1nj8Czq4fw5dSJCwwHxuS4mmoDIU_aP2tM7hCLR_WWaGmTjTd5wf0rIZwrUynd3iyOrLAZ5Qh2_JiRLPciEumKWoyOJofh0bxHczQiTNg19cacEjYBb4FxkAV2CbG_PRKDFsWCS0HX_wu_sm4yvxk0LOkuM9Pc46t79cldrckUWoKmahW-GocsqdK5nZN3hx0JveWALnv1pC5E-75a1zJ-_d7h4CZfzkY2mClVKlgwhFRv2cG6PH5tqCQMJMVJfK3-21GLn5-xXzUKVTJw6cfYv9ggcsSj0uuJznyV0UG8XOZdlrUZ-FlrIIXUOBCpIKMLQy9HbAXVzN2BT8AbbFq9tSdlvi9QKeD4SJmRaFMtyB29ecQOdwRDm44i7FrbSIL1BAVvdHZLH5sXRJ5qH_N73iyNS6ApluKbLrpuScfzLnQLzsm5g2-lWcLR7PfeV-dG2jeZaTfrbnjJ5ekin0UiI2mC1ne9bmvsQfBVGjiOAJvIBW5iGnE2L61Avo-_hP2oGI87gJ-svhzjnoFvbkuSdNY5n-RAWSUBFW6r2qQClMSParRusqeLHp6wugDpdihmhlfYXYsGpQGIKdGXD-INM9XGDWSGqNv53epC8uHLOzpBKD4VW_PLqIjp2V0sWicEs=w600-h390-no?authuser=0",
        "size": "full",
        "aspectRatio": "20:13",
        "aspectMode": "cover",
        "action": {
          "type": "uri",
          "uri": "http://linecorp.com/"
        }
      },
      "footer": {
        "type": "box",
        "layout": "vertical",
        "spacing": "sm",
        "contents": [
          {
            "type": "button",
            "style": "link",
            "height": "sm",
            "action": {
              "type": "uri",
              "label": array[0][0],
              "uri": array[0][1]
            }
          },
          {
            "type": "button",
            "style": "link",
            "height": "sm",
            "action": {
              "type": "uri",
              "label": array[1][0],
              "uri": array[1][1]
            }
          },
          {
            "type": "button",
            "action": {
              "type": "uri",
              "label": array[2][0],
              "uri": array[2][1]
            }
          },
          {
            "type": "spacer",
            "size": "sm"
          }
        ],
        "flex": 0
      }
    }
  }
  return text
}
module.exports.flex_news_1101 = function flex_news_1101(array) {
  let text = {
    "type": "flex",
    "altText": "this is a flex message",
    "contents": {
      "type": "bubble",
      "header": {
        "type": "box",
        "layout": "vertical",
        "contents": [
          {
            "type": "text",
            "text": "台泥新聞",
            "size": "35px",
            "weight": "bold",
            "align": "center"
          }
        ]
      },
      "hero": {
        "type": "image",
        "url": "https://lh3.googleusercontent.com/HPOXF6EjEpEdJ4xcL4RWRgKJgt-sVzox_Q3V7MGhvO5kNqXfbDRBN7ghbjc9SB1GAMk9edEY39j0ZORxT0jURnURlJqfssPBhtM7l9cdXTru6bud-PonO3x7WvJwsA7ONSrBhUa_92or6aSRj5yPM7aNu-gk5GvuTCU0NLz0jnn-ndxofhu2qLchY1fbdP-EwVIvS5PJcHlM_W6MMhBqI45sJWuy80BseXeROMkrsUMpcytmRllbW-LlLoidkG_GZ7G1Iy0mG2Ef6NQDqWKSPomYjaSDIawL8YPVclbJesh9u-WkGxHKsp9_fWxhVGFHHX-sHp0qXoyETB06biSaErFok74us3ONzHlxEWsgYDhathWj4cZPwnDBKpVeKvHwl7zIalJzqiMnAdqraixMg-5hJk7lR_AtKVp83hAT9vo9M8E04cZI9MQBtJBlZPs8_FtlRRbnhP5KiAItG2p6GVy3KszXwoQa8iXDgpVqZ8zNVjSeRL7v5rwJkFfnFSrMuGvcbDKqUJXmBye-6Bs2xrtflI15DNFNHca0Is3Q4P6BHDZKoHwY0do4rSP2EGLDcX48IbRp9ar-zXA1dcuS_1cqIZTfSHnDAV83Pyu-a3Kc1SOkxwtQ9iz0aSGHm1ZzuM939-cceYERTHuY0q98gA1rjcYf9rHpy41H8IjGPLXF-HByWLpcYi6LwdzSqFEViyEDF6HPNN5WcwAu386DBv-I=w600-h390-no?authuser=0",
        "size": "full",
        "aspectRatio": "20:13",
        "aspectMode": "cover",
        "action": {
          "type": "uri",
          "uri": "http://linecorp.com/"
        }
      },
      "footer": {
        "type": "box",
        "layout": "vertical",
        "spacing": "sm",
        "contents": [
          {
            "type": "button",
            "style": "link",
            "height": "sm",
            "action": {
              "type": "uri",
              "label": array[0][0],
              "uri": array[0][1]
            }
          },
          {
            "type": "button",
            "style": "link",
            "height": "sm",
            "action": {
              "type": "uri",
              "label": array[1][0],
              "uri": array[1][1]
            }
          },
          {
            "type": "button",
            "action": {
              "type": "uri",
              "label": array[2][0],
              "uri": array[2][1]
            }
          },
          {
            "type": "spacer",
            "size": "sm"
          }
        ],
        "flex": 0
      }
    }
  }
  return text
}
module.exports.flex_news_2002 = function flex_news_2002(array) {
  let text = {
    "type": "flex",
    "altText": "this is a flex message",
    "contents": {
      "type": "bubble",
      "header": {
        "type": "box",
        "layout": "vertical",
        "contents": [
          {
            "type": "text",
            "text": "中鋼新聞",
            "size": "35px",
            "weight": "bold",
            "align": "center"
          }
        ]
      },
      "hero": {
        "type": "image",
        "url": "https://lh3.googleusercontent.com/iHp-YER_jl4vYJPrW4EDMqprW7pwS7D5JflXQGewxISIdIhIcSLPv9FQYKbujsEFAvRKbJZtyMccWrEGsaDTC2jXd4KTTRLdfvMwYqyb3gGUHK-Gnlfv8QHUxbFpQjKrcBKaFNbY84XIWAzFxSc-XedWCBWSnEvDr_zVaB-wHEtpQuyA4uPbZt9pqAakvo6Y-FJ7Z8OTXGsolTxYXviP3Kvju53QBhDpF9Qal6QSyuC8xyGZ8J0l7BHqqwFSYkSn9AAXamX3iYIERoj_SOOwwg6AQlGpXIt5cKP7iA6pXWavKo7ifcMpO__aJfX-EBvM_FKUtKOXJv-Quh5ZR5mcJO2FdN2_Boro2mPn5VqqR-ayduSLTYyRvxl5jyjO5lO7rV4kvHMa0X4jw9l62xk8VlHEXgbx8YWieiKF4bj2cvZNSvwVITaEvWWl5MV7IOJTQV0SE11t0ry5xbgx6N15oHD3pC78rx1AhnzJNuKwCderB83Ghls95mfQrPw_3h1hTUh-D_gNMucjBxZO4TUyP5S7blGUrjQydhF5Pi5F_TM13MOKqDTti_leDVdAh9LjCEjPhEdn0g09ugP6D0j-YWB5JFpbCtxsx382mqaGDiNRARtLvNDtNz1FP_ENcmxioLX_r68UndkcKcwq5bd5NqsqW2-k_y-3WsiNUU2ScXOMQy9CkTptoQ5Ml6C_91-hybK-N-r1OlJTIjWsdmAGdL0E=w600-h390-no?authuser=0",
        "size": "full",
        "aspectRatio": "20:13",
        "aspectMode": "cover",
        "action": {
          "type": "uri",
          "uri": "http://linecorp.com/"
        }
      },
      "footer": {
        "type": "box",
        "layout": "vertical",
        "spacing": "sm",
        "contents": [
          {
            "type": "button",
            "style": "link",
            "height": "sm",
            "action": {
              "type": "uri",
              "label": array[0][0],
              "uri": array[0][1]
            }
          },
          {
            "type": "button",
            "style": "link",
            "height": "sm",
            "action": {
              "type": "uri",
              "label": array[1][0],
              "uri": array[1][1]
            }
          },
          {
            "type": "button",
            "action": {
              "type": "uri",
              "label": array[2][0],
              "uri": array[2][1]
            }
          },
          {
            "type": "spacer",
            "size": "sm"
          }
        ],
        "flex": 0
      }
    }
  }
  return text
}
module.exports.flex_news_2603 = function flex_news_2603(array) {
  let text = {
    "type": "flex",
    "altText": "this is a flex message",
    "contents": {
      "type": "bubble",
      "header": {
        "type": "box",
        "layout": "vertical",
        "contents": [
          {
            "type": "text",
            "text": "長榮新聞",
            "size": "35px",
            "weight": "bold",
            "align": "center"
          }
        ]
      },
      "hero": {
        "type": "image",
        "url": "https://lh3.googleusercontent.com/m7yICxcXf8ztz0OQoi59RO-TbAP710aiPtRvtyMc5n_BacOYhkFb07_sz0tqomEOw-wSKPCm6zd1N1HXreRZfePrRpk8OziBimHJh2r-6D7cgKDWpg9BUel26JHGzT0Ua3WLJqw5kUKCOCqS-DHZoW2fXUFuZI0LtCkwBcIlVoF0rmrb3ZZAVZYN4nyoWOcxwY1v2PzZX8CDi4HmcUQSQFhnobQnJ14gEQJyiLeGc1RPvJkI9ASJKfWSsTkvmF77RA3R7d6wXNicjM-aHZr-yGXcuf60tNmzS4teRunDEPffXy4FQ5be__7JVBwM23hlkS_3CQJO-_e08xoWPY_g_u9pKd7KyqwoO0c8E22BoK4DU5Ul_d_Gm_OzyLSXVY1WRW1P-ZYl1W9E77rmAS60VYXP0i_AUCWwrFFJZCZ8LOmKF1d5_22hgywW1htqMyDA2yeqaT86FzgzMl083uJURcI8HD6Q_4oGuVKF7uaqdsiR2DVsw6AhYdJxkg5WlbtcJdg3huZrazM8b1ig3ihSGKPjOaLkuhyCIDWUtMChT_oCVK6NEjt0mlbrfn8Cgxog_NdVEU7_Clx2zrfDJ9UEAncVkmqvzz_rYTj06brz5Kcy7JziTIHbJzHwsf-AffCUdnEjRuobtjzCqKeU-I1ioD11uNLBBvaRTLmZBcE2pj8C6mi3ILa_eqiyEIhFanzmIA_IvKd-r9YargxYVkPVCNss=w600-h390-no?authuser=0",
        "size": "full",
        "aspectRatio": "20:13",
        "aspectMode": "cover",
        "action": {
          "type": "uri",
          "uri": "http://linecorp.com/"
        }
      },
      "footer": {
        "type": "box",
        "layout": "vertical",
        "spacing": "sm",
        "contents": [
          {
            "type": "button",
            "style": "link",
            "height": "sm",
            "action": {
              "type": "uri",
              "label": array[0][0],
              "uri": array[0][1]
            }
          },
          {
            "type": "button",
            "style": "link",
            "height": "sm",
            "action": {
              "type": "uri",
              "label": array[1][0],
              "uri": array[1][1]
            }
          },
          {
            "type": "button",
            "action": {
              "type": "uri",
              "label": array[2][0],
              "uri": array[2][1]
            }
          },
          {
            "type": "spacer",
            "size": "sm"
          }
        ],
        "flex": 0
      }
    }
  }
  return text
}
module.exports.flex_news_2610 = function flex_news_2610(array) {
  let text = {
    "type": "flex",
    "altText": "this is a flex message",
    "contents": {
      "type": "bubble",
      "header": {
        "type": "box",
        "layout": "vertical",
        "contents": [
          {
            "type": "text",
            "text": "華航新聞",
            "size": "35px",
            "weight": "bold",
            "align": "center"
          }
        ]
      },
      "hero": {
        "type": "image",
        "url": "https://lh3.googleusercontent.com/k7hJD7efgEX8gEm1-zFHBd2Uq6htPU-rIj0r1Tj6WFgC3kyXRkUoqt4f510uJAyc-ACCfPbBFATb0yd_n7dyp1AkeSlc2j-nzJJiFUMRMIA1Cv-tKFHaSRrmneZM-qqAOeOWp-D8D_ao5f_3tGO9P0MwKjF3Q093lupQAEMsuYHb-LVXyNfKeR5319TjYSjMDmRSHmtbKwnqjl21i1dUcJ0Ihp47ENdjlwyzEwyBIwWMI99TK2f8xDjFi8IBTRIP6dhAtD1Xrd7K2lDzdl7QIaRwdfTuVsXY1t7hXNNlAuNPCeen4rGXCo7wjk3d_gkxORS4YCfMzw8TY9-c97PB48fvCXQ9nzhfpYbWKneqPGxWll-p7Et26h8iq_2xC_WfLDExfinSKCcYK-PfbFukVlOAatfTGWuIk0APY0WAB0zNGb4Ndz5I4kNqLw7zZn5pCYN0aft3l25pLXhxSRMKO-Rw74v9aOztdS-hMbmN8xVbUCy8rKs1lEasRR7CwvgWAZWvQ7YiaXZ8pwDWwfTa-g5AJmNA24LDrlmM8V8W83Wbh1TYvVhSTZMWbHBKP9XxY2G0RsatyqzEuZzgR9Lauc0UL0dB9imOArSUSYEbrysSHadvXQH26yUImA4QueUbHyPn8yQ4dQVYWyn95NuDsTF9sRW28jSrunUU04bpfGHQ9NjmVFB0_I5q1uGwQcqr0wfbWkhSUCdeJrq19ooguHWe=w600-h390-no?authuser=0",
        "size": "full",
        "aspectRatio": "20:13",
        "aspectMode": "cover",
        "action": {
          "type": "uri",
          "uri": "http://linecorp.com/"
        }
      },
      "footer": {
        "type": "box",
        "layout": "vertical",
        "spacing": "sm",
        "contents": [
          {
            "type": "button",
            "style": "link",
            "height": "sm",
            "action": {
              "type": "uri",
              "label": array[0][0],
              "uri": array[0][1]
            }
          },
          {
            "type": "button",
            "style": "link",
            "height": "sm",
            "action": {
              "type": "uri",
              "label": array[1][0],
              "uri": array[1][1]
            }
          },
          {
            "type": "button",
            "action": {
              "type": "uri",
              "label": array[2][0],
              "uri": array[2][1]
            }
          },
          {
            "type": "spacer",
            "size": "sm"
          }
        ],
        "flex": 0
      }
    }
  }
  return text
}

module.exports.flex_news_2015 = function flex_news_2015(array) {
  let text = {
    "type": "flex",
    "altText": "this is a flex message",
    "contents": {
      "type": "bubble",
      "header": {
        "type": "box",
        "layout": "vertical",
        "contents": [
          {
            "type": "text",
            "text": "豐興新聞",
            "size": "35px",
            "weight": "bold",
            "align": "center"
          }
        ]
      },
      "hero": {
        "type": "image",
        "url": "https://lh3.googleusercontent.com/k7hJD7efgEX8gEm1-zFHBd2Uq6htPU-rIj0r1Tj6WFgC3kyXRkUoqt4f510uJAyc-ACCfPbBFATb0yd_n7dyp1AkeSlc2j-nzJJiFUMRMIA1Cv-tKFHaSRrmneZM-qqAOeOWp-D8D_ao5f_3tGO9P0MwKjF3Q093lupQAEMsuYHb-LVXyNfKeR5319TjYSjMDmRSHmtbKwnqjl21i1dUcJ0Ihp47ENdjlwyzEwyBIwWMI99TK2f8xDjFi8IBTRIP6dhAtD1Xrd7K2lDzdl7QIaRwdfTuVsXY1t7hXNNlAuNPCeen4rGXCo7wjk3d_gkxORS4YCfMzw8TY9-c97PB48fvCXQ9nzhfpYbWKneqPGxWll-p7Et26h8iq_2xC_WfLDExfinSKCcYK-PfbFukVlOAatfTGWuIk0APY0WAB0zNGb4Ndz5I4kNqLw7zZn5pCYN0aft3l25pLXhxSRMKO-Rw74v9aOztdS-hMbmN8xVbUCy8rKs1lEasRR7CwvgWAZWvQ7YiaXZ8pwDWwfTa-g5AJmNA24LDrlmM8V8W83Wbh1TYvVhSTZMWbHBKP9XxY2G0RsatyqzEuZzgR9Lauc0UL0dB9imOArSUSYEbrysSHadvXQH26yUImA4QueUbHyPn8yQ4dQVYWyn95NuDsTF9sRW28jSrunUU04bpfGHQ9NjmVFB0_I5q1uGwQcqr0wfbWkhSUCdeJrq19ooguHWe=w600-h390-no?authuser=0",
        "size": "full",
        "aspectRatio": "20:13",
        "aspectMode": "cover",
        "action": {
          "type": "uri",
          "uri": "http://linecorp.com/"
        }
      },
      "footer": {
        "type": "box",
        "layout": "vertical",
        "spacing": "sm",
        "contents": [
          {
            "type": "button",
            "style": "link",
            "height": "sm",
            "action": {
              "type": "uri",
              "label": array[0][0],
              "uri": array[0][1]
            }
          },
          {
            "type": "button",
            "style": "link",
            "height": "sm",
            "action": {
              "type": "uri",
              "label": array[1][0],
              "uri": array[1][1]
            }
          },
          {
            "type": "button",
            "action": {
              "type": "uri",
              "label": array[2][0],
              "uri": array[2][1]
            }
          },
          {
            "type": "spacer",
            "size": "sm"
          }
        ],
        "flex": 0
      }
    }
  }
  return text
}

function check_color(open, clos) {
  if (open < clos) {
    return "#FF0000"
  } else {
    return "#008000"
  }
}

module.exports.check_watch_list_tiem = function check_watch_list_tiem(array) {
  switch (array.length) {
    case 1:
      return watch_list_1_item_t(array)
    case 2:
      return watch_list_2_item_t(array)
    case 3:
      return watch_list_3_item_t(array)
    case 4:
      return watch_list_4_item_t(array)
    case 5:
      return watch_list_5_item_t(array)
  }
}

function watch_list_1_item_t(array) {
  let text = {
    "type": "flex",
    "altText": "this is a flex message",
    "contents": {
      "type": "carousel",
      "contents": [
        {
          "type": "bubble",
          "body": {
            "type": "box",
            "layout": "vertical",
            "contents": [
              {
                "type": "image",
                "url": "https://lh3.googleusercontent.com/61cZkoXqIHFDRJM_6rSHW7lTqHEeAOcV1-E1Ri59s94tUlcMcYC4pZliiqp_pfwrM3lBfZrAck3JC-wtbHNcoRCJeLERyieXZ4qmmPUGtFEX48PEHQiwZCVDe9M_3E8R9h-2eWiGDtkQA5HLfimLsZH8e2vtrH0iYW5jg8IYWvG2MOILJRGwJtH9Q2oV-6dCBmShKozjVTb514qWLplfldxlxtS_Rbfhbm7IuEdBHtY76ZbT7c1HzV2vr4HaHjXgxc7nlS_y-PewqL5B4CDgAkKCHxQm-YeKnuQc3-rsLIqBWtv5sRK1I1fny7M74iFSf37VWJN0nm9jKY2bm-ago2w7v7PNEuN8YVFa4iAVWI1RcnJ-vveAL9478n9YQ63_uBB7JUjKkEe6FbaCpMLQJekJwDlMUO_aLcwNFnCCKDilQ7Eu7NmlxuwW7ockkA8KTijjgeH7PTFMp2bWdp-1ByQTGaoTYWMICP50rD2AahmsadMN19heZrVbyT46ujXgKy7mRuwXvrO6oj9Nbgb5WFtIiiYu3Nttuw47aMmbv-w8x9CQHKJnmzQzLej3Ceb1_v3t_tA7ek5AaAriU5UK46Lq2b4jGcRRMj7r1lzMQvkU1l3E67Aa2hr9yJ2etYGxvBoYQDpuNdBOT_JhtiWGB5mKCDZREt1JksY_VeWugXUFfnWip_dXEPl9iBbg5KIywHSRhr_mvBlSw8ws6kTeWd_E=w662-h882-no?authuser=0",
                "size": "full",
                "aspectMode": "cover",
                "aspectRatio": "2:3",
                "gravity": "top"
              },
              {
                "type": "box",
                "layout": "horizontal",
                "contents": [
                  {
                    "type": "text",
                    "text": array[0][2],//公司名稱
                    "size": "33px",
                    "weight": "bold",
                    "align": "center"
                  }
                ],
                "position": "absolute",
                "offsetTop": "93px",
                "width": "100%"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "text",
                    "text": array[0][3],//成交價
                    "size": "18px",
                    "weight": "bold"
                  }
                ],
                "offsetTop": "152px",
                "offsetStart": "90px",
                "position": "absolute"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "text",
                    "text": array[0][4],//開盤價
                    "size": "18px",
                    "weight": "bold"
                  }
                ],
                "offsetTop": "190px",
                "offsetStart": "90px",
                "position": "absolute"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "text",
                    "text": array[0][5],//最高價
                    "size": "18px",
                    "weight": "bold"
                  }
                ],
                "offsetTop": "230px",
                "offsetStart": "90px",
                "position": "absolute"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "text",
                    "text": array[0][6],//最低價
                    "size": "18px",
                    "weight": "bold"
                  }
                ],
                "offsetTop": "268px",
                "offsetStart": "90px",
                "position": "absolute"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "text",
                    "text": array[0][7],//均價
                    "size": "18px",
                    "weight": "bold"
                  }
                ],
                "offsetTop": "308px",
                "offsetStart": "90px",
                "position": "absolute"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "text",
                    "text": array[0][8],//昨收
                    "size": "18px",
                    "weight": "bold"
                  }
                ],
                "offsetTop": "152px",
                "offsetStart": "205px",
                "position": "absolute"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "text",
                    "text": array[0][9],//漲跌幅
                    "size": "18px",
                    "weight": "bold",
                    "color": check_color(array[0][4], array[0][3])
                  }
                ],
                "offsetTop": "192px",
                "offsetStart": "225px",
                "position": "absolute"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "text",
                    "text": array[0][10],//漲跌
                    "size": "18px",
                    "weight": "bold",
                    "color": check_color(array[0][4], array[0][3])
                  }
                ],
                "offsetTop": "230px",
                "offsetStart": "205px",
                "position": "absolute"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "text",
                    "text": array[0][11],//總量
                    "size": "18px",
                    "weight": "bold"
                  }
                ],
                "offsetTop": "268px",
                "offsetStart": "205px",
                "position": "absolute"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "text",
                    "text": array[0][12],//振幅
                    "size": "18px",
                    "weight": "bold"
                  }
                ],
                "offsetTop": "308px",
                "offsetStart": "205px",
                "position": "absolute"
              },
              {
                "type": "box",
                "layout": "horizontal",
                "contents": [
                  {
                    "type": "text",
                    "text": array[0][2] + "新聞",
                    "size": "25px",
                    "weight": "bold",
                    "action": {
                      "type": "message",
                      "label": "action",
                      "text": array[0][2] + "新聞"//新聞
                    },
                    "align": "center"
                  }
                ],
                "offsetTop": "354px",
                "position": "absolute",
                "width": "100%"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "text",
                    "text": array[0][0],//日期
                    "size": "15px",
                    "weight": "bold"
                  }
                ],
                "offsetTop": "400px",
                "offsetStart": "200px",
                "position": "absolute"
              }
            ],
            "paddingAll": "0px"
          }
        }
      ]
    }
  }
  return text
}
function watch_list_2_item_t(array) {
  let text = {
    "type": "flex",
    "altText": "this is a flex message",
    "contents": {
      "type": "carousel",
      "contents": [
        {
          "type": "bubble",
          "body": {
            "type": "box",
            "layout": "vertical",
            "contents": [
              {
                "type": "image",
                "url": "https://lh3.googleusercontent.com/61cZkoXqIHFDRJM_6rSHW7lTqHEeAOcV1-E1Ri59s94tUlcMcYC4pZliiqp_pfwrM3lBfZrAck3JC-wtbHNcoRCJeLERyieXZ4qmmPUGtFEX48PEHQiwZCVDe9M_3E8R9h-2eWiGDtkQA5HLfimLsZH8e2vtrH0iYW5jg8IYWvG2MOILJRGwJtH9Q2oV-6dCBmShKozjVTb514qWLplfldxlxtS_Rbfhbm7IuEdBHtY76ZbT7c1HzV2vr4HaHjXgxc7nlS_y-PewqL5B4CDgAkKCHxQm-YeKnuQc3-rsLIqBWtv5sRK1I1fny7M74iFSf37VWJN0nm9jKY2bm-ago2w7v7PNEuN8YVFa4iAVWI1RcnJ-vveAL9478n9YQ63_uBB7JUjKkEe6FbaCpMLQJekJwDlMUO_aLcwNFnCCKDilQ7Eu7NmlxuwW7ockkA8KTijjgeH7PTFMp2bWdp-1ByQTGaoTYWMICP50rD2AahmsadMN19heZrVbyT46ujXgKy7mRuwXvrO6oj9Nbgb5WFtIiiYu3Nttuw47aMmbv-w8x9CQHKJnmzQzLej3Ceb1_v3t_tA7ek5AaAriU5UK46Lq2b4jGcRRMj7r1lzMQvkU1l3E67Aa2hr9yJ2etYGxvBoYQDpuNdBOT_JhtiWGB5mKCDZREt1JksY_VeWugXUFfnWip_dXEPl9iBbg5KIywHSRhr_mvBlSw8ws6kTeWd_E=w662-h882-no?authuser=0",
                "size": "full",
                "aspectMode": "cover",
                "aspectRatio": "2:3",
                "gravity": "top"
              },
              {
                "type": "box",
                "layout": "horizontal",
                "contents": [
                  {
                    "type": "text",
                    "text": array[0][2],//公司名稱
                    "size": "33px",
                    "weight": "bold",
                    "align": "center"
                  }
                ],
                "position": "absolute",
                "offsetTop": "93px",
                "width": "100%"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "text",
                    "text": array[0][3],//成交價
                    "size": "18px",
                    "weight": "bold"
                  }
                ],
                "offsetTop": "152px",
                "offsetStart": "90px",
                "position": "absolute"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "text",
                    "text": array[0][4],//開盤價
                    "size": "18px",
                    "weight": "bold"
                  }
                ],
                "offsetTop": "190px",
                "offsetStart": "90px",
                "position": "absolute"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "text",
                    "text": array[0][5],//最高價
                    "size": "18px",
                    "weight": "bold"
                  }
                ],
                "offsetTop": "230px",
                "offsetStart": "90px",
                "position": "absolute"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "text",
                    "text": array[0][6],//最低價
                    "size": "18px",
                    "weight": "bold"
                  }
                ],
                "offsetTop": "268px",
                "offsetStart": "90px",
                "position": "absolute"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "text",
                    "text": array[0][7],//均價
                    "size": "18px",
                    "weight": "bold"
                  }
                ],
                "offsetTop": "308px",
                "offsetStart": "90px",
                "position": "absolute"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "text",
                    "text": array[0][8],//昨收
                    "size": "18px",
                    "weight": "bold"
                  }
                ],
                "offsetTop": "152px",
                "offsetStart": "205px",
                "position": "absolute"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "text",
                    "text": array[0][9],//漲跌幅
                    "size": "18px",
                    "weight": "bold",
                    "color": check_color(array[0][4], array[0][3])
                  }
                ],
                "offsetTop": "192px",
                "offsetStart": "225px",
                "position": "absolute"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "text",
                    "text": array[0][10],//漲跌
                    "size": "18px",
                    "weight": "bold",
                    "color": check_color(array[0][4], array[0][3])
                  }
                ],
                "offsetTop": "230px",
                "offsetStart": "205px",
                "position": "absolute"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "text",
                    "text": array[0][11],//總量
                    "size": "18px",
                    "weight": "bold"
                  }
                ],
                "offsetTop": "268px",
                "offsetStart": "205px",
                "position": "absolute"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "text",
                    "text": array[0][12],//振幅
                    "size": "18px",
                    "weight": "bold"
                  }
                ],
                "offsetTop": "308px",
                "offsetStart": "205px",
                "position": "absolute"
              },
              {
                "type": "box",
                "layout": "horizontal",
                "contents": [
                  {
                    "type": "text",
                    "text": array[0][2] + "新聞",
                    "size": "25px",
                    "weight": "bold",
                    "action": {
                      "type": "message",
                      "label": "action",
                      "text": array[0][2] + "新聞"//新聞
                    },
                    "align": "center"
                  }
                ],
                "offsetTop": "354px",
                "position": "absolute",
                "width": "100%"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "text",
                    "text": array[0][0],//日期
                    "size": "15px",
                    "weight": "bold"
                  }
                ],
                "offsetTop": "400px",
                "offsetStart": "200px",
                "position": "absolute"
              }
            ],
            "paddingAll": "0px"
          }
        },
        {
          "type": "bubble",
          "body": {
            "type": "box",
            "layout": "vertical",
            "contents": [
              {
                "type": "image",
                "url": "https://lh3.googleusercontent.com/61cZkoXqIHFDRJM_6rSHW7lTqHEeAOcV1-E1Ri59s94tUlcMcYC4pZliiqp_pfwrM3lBfZrAck3JC-wtbHNcoRCJeLERyieXZ4qmmPUGtFEX48PEHQiwZCVDe9M_3E8R9h-2eWiGDtkQA5HLfimLsZH8e2vtrH0iYW5jg8IYWvG2MOILJRGwJtH9Q2oV-6dCBmShKozjVTb514qWLplfldxlxtS_Rbfhbm7IuEdBHtY76ZbT7c1HzV2vr4HaHjXgxc7nlS_y-PewqL5B4CDgAkKCHxQm-YeKnuQc3-rsLIqBWtv5sRK1I1fny7M74iFSf37VWJN0nm9jKY2bm-ago2w7v7PNEuN8YVFa4iAVWI1RcnJ-vveAL9478n9YQ63_uBB7JUjKkEe6FbaCpMLQJekJwDlMUO_aLcwNFnCCKDilQ7Eu7NmlxuwW7ockkA8KTijjgeH7PTFMp2bWdp-1ByQTGaoTYWMICP50rD2AahmsadMN19heZrVbyT46ujXgKy7mRuwXvrO6oj9Nbgb5WFtIiiYu3Nttuw47aMmbv-w8x9CQHKJnmzQzLej3Ceb1_v3t_tA7ek5AaAriU5UK46Lq2b4jGcRRMj7r1lzMQvkU1l3E67Aa2hr9yJ2etYGxvBoYQDpuNdBOT_JhtiWGB5mKCDZREt1JksY_VeWugXUFfnWip_dXEPl9iBbg5KIywHSRhr_mvBlSw8ws6kTeWd_E=w662-h882-no?authuser=0",
                "size": "full",
                "aspectMode": "cover",
                "aspectRatio": "2:3",
                "gravity": "top"
              },
              {
                "type": "box",
                "layout": "horizontal",
                "contents": [
                  {
                    "type": "text",
                    "text": array[1][2],//公司名稱
                    "size": "33px",
                    "weight": "bold",
                    "align": "center"
                  }
                ],
                "position": "absolute",
                "offsetTop": "93px",
                "width": "100%"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "text",
                    "text": array[1][3],//成交價
                    "size": "18px",
                    "weight": "bold"
                  }
                ],
                "offsetTop": "152px",
                "offsetStart": "90px",
                "position": "absolute"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "text",
                    "text": array[1][4],//開盤價
                    "size": "18px",
                    "weight": "bold"
                  }
                ],
                "offsetTop": "190px",
                "offsetStart": "90px",
                "position": "absolute"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "text",
                    "text": array[1][5],//最高價
                    "size": "18px",
                    "weight": "bold"
                  }
                ],
                "offsetTop": "230px",
                "offsetStart": "90px",
                "position": "absolute"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "text",
                    "text": array[1][6],//最低價
                    "size": "18px",
                    "weight": "bold"
                  }
                ],
                "offsetTop": "268px",
                "offsetStart": "90px",
                "position": "absolute"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "text",
                    "text": array[1][7],//均價
                    "size": "18px",
                    "weight": "bold"
                  }
                ],
                "offsetTop": "308px",
                "offsetStart": "90px",
                "position": "absolute"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "text",
                    "text": array[1][8],//昨收
                    "size": "18px",
                    "weight": "bold"
                  }
                ],
                "offsetTop": "152px",
                "offsetStart": "205px",
                "position": "absolute"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "text",
                    "text": array[1][9],//漲跌幅
                    "size": "18px",
                    "weight": "bold",
                    "color": check_color(array[1][4], array[1][3])
                  }
                ],
                "offsetTop": "192px",
                "offsetStart": "225px",
                "position": "absolute"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "text",
                    "text": array[1][10],//漲跌
                    "size": "18px",
                    "weight": "bold",
                    "color": check_color(array[1][4], array[1][3])
                  }
                ],
                "offsetTop": "230px",
                "offsetStart": "205px",
                "position": "absolute"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "text",
                    "text": array[1][11],//總量
                    "size": "18px",
                    "weight": "bold"
                  }
                ],
                "offsetTop": "268px",
                "offsetStart": "205px",
                "position": "absolute"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "text",
                    "text": array[1][12],//振幅
                    "size": "18px",
                    "weight": "bold"
                  }
                ],
                "offsetTop": "308px",
                "offsetStart": "205px",
                "position": "absolute"
              },
              {
                "type": "box",
                "layout": "horizontal",
                "contents": [
                  {
                    "type": "text",
                    "text": array[1][2] + "新聞",
                    "size": "25px",
                    "weight": "bold",
                    "action": {
                      "type": "message",
                      "label": "action",
                      "text": array[1][2] + "新聞"//新聞
                    },
                    "align": "center"
                  }
                ],
                "offsetTop": "354px",
                "position": "absolute",
                "width": "100%"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "text",
                    "text": array[1][0],//日期
                    "size": "15px",
                    "weight": "bold"
                  }
                ],
                "offsetTop": "400px",
                "offsetStart": "200px",
                "position": "absolute"
              }
            ],
            "paddingAll": "0px"
          }
        }
      ]
    }
  }
  return text
}
function watch_list_3_item_t(array) {
  let text = {
    "type": "flex",
    "altText": "this is a flex message",
    "contents": {
      "type": "carousel",
      "contents": [
        {
          "type": "bubble",
          "body": {
            "type": "box",
            "layout": "vertical",
            "contents": [
              {
                "type": "image",
                "url": "https://lh3.googleusercontent.com/61cZkoXqIHFDRJM_6rSHW7lTqHEeAOcV1-E1Ri59s94tUlcMcYC4pZliiqp_pfwrM3lBfZrAck3JC-wtbHNcoRCJeLERyieXZ4qmmPUGtFEX48PEHQiwZCVDe9M_3E8R9h-2eWiGDtkQA5HLfimLsZH8e2vtrH0iYW5jg8IYWvG2MOILJRGwJtH9Q2oV-6dCBmShKozjVTb514qWLplfldxlxtS_Rbfhbm7IuEdBHtY76ZbT7c1HzV2vr4HaHjXgxc7nlS_y-PewqL5B4CDgAkKCHxQm-YeKnuQc3-rsLIqBWtv5sRK1I1fny7M74iFSf37VWJN0nm9jKY2bm-ago2w7v7PNEuN8YVFa4iAVWI1RcnJ-vveAL9478n9YQ63_uBB7JUjKkEe6FbaCpMLQJekJwDlMUO_aLcwNFnCCKDilQ7Eu7NmlxuwW7ockkA8KTijjgeH7PTFMp2bWdp-1ByQTGaoTYWMICP50rD2AahmsadMN19heZrVbyT46ujXgKy7mRuwXvrO6oj9Nbgb5WFtIiiYu3Nttuw47aMmbv-w8x9CQHKJnmzQzLej3Ceb1_v3t_tA7ek5AaAriU5UK46Lq2b4jGcRRMj7r1lzMQvkU1l3E67Aa2hr9yJ2etYGxvBoYQDpuNdBOT_JhtiWGB5mKCDZREt1JksY_VeWugXUFfnWip_dXEPl9iBbg5KIywHSRhr_mvBlSw8ws6kTeWd_E=w662-h882-no?authuser=0",
                "size": "full",
                "aspectMode": "cover",
                "aspectRatio": "2:3",
                "gravity": "top"
              },
              {
                "type": "box",
                "layout": "horizontal",
                "contents": [
                  {
                    "type": "text",
                    "text": array[0][2],//公司名稱
                    "size": "33px",
                    "weight": "bold",
                    "align": "center"
                  }
                ],
                "position": "absolute",
                "offsetTop": "93px",
                "width": "100%"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "text",
                    "text": array[0][3],//成交價
                    "size": "18px",
                    "weight": "bold"
                  }
                ],
                "offsetTop": "152px",
                "offsetStart": "90px",
                "position": "absolute"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "text",
                    "text": array[0][4],//開盤價
                    "size": "18px",
                    "weight": "bold"
                  }
                ],
                "offsetTop": "190px",
                "offsetStart": "90px",
                "position": "absolute"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "text",
                    "text": array[0][5],//最高價
                    "size": "18px",
                    "weight": "bold"
                  }
                ],
                "offsetTop": "230px",
                "offsetStart": "90px",
                "position": "absolute"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "text",
                    "text": array[0][6],//最低價
                    "size": "18px",
                    "weight": "bold"
                  }
                ],
                "offsetTop": "268px",
                "offsetStart": "90px",
                "position": "absolute"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "text",
                    "text": array[0][7],//均價
                    "size": "18px",
                    "weight": "bold"
                  }
                ],
                "offsetTop": "308px",
                "offsetStart": "90px",
                "position": "absolute"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "text",
                    "text": array[0][8],//昨收
                    "size": "18px",
                    "weight": "bold"
                  }
                ],
                "offsetTop": "152px",
                "offsetStart": "205px",
                "position": "absolute"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "text",
                    "text": array[0][9],//漲跌幅
                    "size": "18px",
                    "weight": "bold",
                    "color": check_color(array[0][4], array[0][3])
                  }
                ],
                "offsetTop": "192px",
                "offsetStart": "225px",
                "position": "absolute"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "text",
                    "text": array[0][10],//漲跌
                    "size": "18px",
                    "weight": "bold",
                    "color": check_color(array[0][4], array[0][3])
                  }
                ],
                "offsetTop": "230px",
                "offsetStart": "205px",
                "position": "absolute"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "text",
                    "text": array[0][11],//總量
                    "size": "18px",
                    "weight": "bold"
                  }
                ],
                "offsetTop": "268px",
                "offsetStart": "205px",
                "position": "absolute"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "text",
                    "text": array[0][12],//振幅
                    "size": "18px",
                    "weight": "bold"
                  }
                ],
                "offsetTop": "308px",
                "offsetStart": "205px",
                "position": "absolute"
              },
              {
                "type": "box",
                "layout": "horizontal",
                "contents": [
                  {
                    "type": "text",
                    "text": array[0][2] + "新聞",
                    "size": "25px",
                    "weight": "bold",
                    "action": {
                      "type": "message",
                      "label": "action",
                      "text": array[0][2] + "新聞"//新聞
                    },
                    "align": "center"
                  }
                ],
                "offsetTop": "354px",
                "position": "absolute",
                "width": "100%"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "text",
                    "text": array[0][0],//日期
                    "size": "15px",
                    "weight": "bold"
                  }
                ],
                "offsetTop": "400px",
                "offsetStart": "200px",
                "position": "absolute"
              }
            ],
            "paddingAll": "0px"
          }
        },
        {
          "type": "bubble",
          "body": {
            "type": "box",
            "layout": "vertical",
            "contents": [
              {
                "type": "image",
                "url": "https://lh3.googleusercontent.com/61cZkoXqIHFDRJM_6rSHW7lTqHEeAOcV1-E1Ri59s94tUlcMcYC4pZliiqp_pfwrM3lBfZrAck3JC-wtbHNcoRCJeLERyieXZ4qmmPUGtFEX48PEHQiwZCVDe9M_3E8R9h-2eWiGDtkQA5HLfimLsZH8e2vtrH0iYW5jg8IYWvG2MOILJRGwJtH9Q2oV-6dCBmShKozjVTb514qWLplfldxlxtS_Rbfhbm7IuEdBHtY76ZbT7c1HzV2vr4HaHjXgxc7nlS_y-PewqL5B4CDgAkKCHxQm-YeKnuQc3-rsLIqBWtv5sRK1I1fny7M74iFSf37VWJN0nm9jKY2bm-ago2w7v7PNEuN8YVFa4iAVWI1RcnJ-vveAL9478n9YQ63_uBB7JUjKkEe6FbaCpMLQJekJwDlMUO_aLcwNFnCCKDilQ7Eu7NmlxuwW7ockkA8KTijjgeH7PTFMp2bWdp-1ByQTGaoTYWMICP50rD2AahmsadMN19heZrVbyT46ujXgKy7mRuwXvrO6oj9Nbgb5WFtIiiYu3Nttuw47aMmbv-w8x9CQHKJnmzQzLej3Ceb1_v3t_tA7ek5AaAriU5UK46Lq2b4jGcRRMj7r1lzMQvkU1l3E67Aa2hr9yJ2etYGxvBoYQDpuNdBOT_JhtiWGB5mKCDZREt1JksY_VeWugXUFfnWip_dXEPl9iBbg5KIywHSRhr_mvBlSw8ws6kTeWd_E=w662-h882-no?authuser=0",
                "size": "full",
                "aspectMode": "cover",
                "aspectRatio": "2:3",
                "gravity": "top"
              },
              {
                "type": "box",
                "layout": "horizontal",
                "contents": [
                  {
                    "type": "text",
                    "text": array[1][2],//公司名稱
                    "size": "33px",
                    "weight": "bold",
                    "align": "center"
                  }
                ],
                "position": "absolute",
                "offsetTop": "93px",
                "width": "100%"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "text",
                    "text": array[1][3],//成交價
                    "size": "18px",
                    "weight": "bold"
                  }
                ],
                "offsetTop": "152px",
                "offsetStart": "90px",
                "position": "absolute"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "text",
                    "text": array[1][4],//開盤價
                    "size": "18px",
                    "weight": "bold"
                  }
                ],
                "offsetTop": "190px",
                "offsetStart": "90px",
                "position": "absolute"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "text",
                    "text": array[1][5],//最高價
                    "size": "18px",
                    "weight": "bold"
                  }
                ],
                "offsetTop": "230px",
                "offsetStart": "90px",
                "position": "absolute"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "text",
                    "text": array[1][6],//最低價
                    "size": "18px",
                    "weight": "bold"
                  }
                ],
                "offsetTop": "268px",
                "offsetStart": "90px",
                "position": "absolute"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "text",
                    "text": array[1][7],//均價
                    "size": "18px",
                    "weight": "bold"
                  }
                ],
                "offsetTop": "308px",
                "offsetStart": "90px",
                "position": "absolute"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "text",
                    "text": array[1][8],//昨收
                    "size": "18px",
                    "weight": "bold"
                  }
                ],
                "offsetTop": "152px",
                "offsetStart": "205px",
                "position": "absolute"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "text",
                    "text": array[1][9],//漲跌幅
                    "size": "18px",
                    "weight": "bold",
                    "color": check_color(array[1][4], array[1][3])
                  }
                ],
                "offsetTop": "192px",
                "offsetStart": "225px",
                "position": "absolute"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "text",
                    "text": array[1][10],//漲跌
                    "size": "18px",
                    "weight": "bold",
                    "color": check_color(array[1][4], array[1][3])
                  }
                ],
                "offsetTop": "230px",
                "offsetStart": "205px",
                "position": "absolute"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "text",
                    "text": array[1][11],//總量
                    "size": "18px",
                    "weight": "bold"
                  }
                ],
                "offsetTop": "268px",
                "offsetStart": "205px",
                "position": "absolute"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "text",
                    "text": array[1][12],//振幅
                    "size": "18px",
                    "weight": "bold"
                  }
                ],
                "offsetTop": "308px",
                "offsetStart": "205px",
                "position": "absolute"
              },
              {
                "type": "box",
                "layout": "horizontal",
                "contents": [
                  {
                    "type": "text",
                    "text": array[1][2] + "新聞",
                    "size": "25px",
                    "weight": "bold",
                    "action": {
                      "type": "message",
                      "label": "action",
                      "text": array[1][2] + "新聞"//新聞
                    },
                    "align": "center"
                  }
                ],
                "offsetTop": "354px",
                "position": "absolute",
                "width": "100%"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "text",
                    "text": array[1][0],//日期
                    "size": "15px",
                    "weight": "bold"
                  }
                ],
                "offsetTop": "400px",
                "offsetStart": "200px",
                "position": "absolute"
              }
            ],
            "paddingAll": "0px"
          }
        },
        {
          "type": "bubble",
          "body": {
            "type": "box",
            "layout": "vertical",
            "contents": [
              {
                "type": "image",
                "url": "https://lh3.googleusercontent.com/61cZkoXqIHFDRJM_6rSHW7lTqHEeAOcV1-E1Ri59s94tUlcMcYC4pZliiqp_pfwrM3lBfZrAck3JC-wtbHNcoRCJeLERyieXZ4qmmPUGtFEX48PEHQiwZCVDe9M_3E8R9h-2eWiGDtkQA5HLfimLsZH8e2vtrH0iYW5jg8IYWvG2MOILJRGwJtH9Q2oV-6dCBmShKozjVTb514qWLplfldxlxtS_Rbfhbm7IuEdBHtY76ZbT7c1HzV2vr4HaHjXgxc7nlS_y-PewqL5B4CDgAkKCHxQm-YeKnuQc3-rsLIqBWtv5sRK1I1fny7M74iFSf37VWJN0nm9jKY2bm-ago2w7v7PNEuN8YVFa4iAVWI1RcnJ-vveAL9478n9YQ63_uBB7JUjKkEe6FbaCpMLQJekJwDlMUO_aLcwNFnCCKDilQ7Eu7NmlxuwW7ockkA8KTijjgeH7PTFMp2bWdp-1ByQTGaoTYWMICP50rD2AahmsadMN19heZrVbyT46ujXgKy7mRuwXvrO6oj9Nbgb5WFtIiiYu3Nttuw47aMmbv-w8x9CQHKJnmzQzLej3Ceb1_v3t_tA7ek5AaAriU5UK46Lq2b4jGcRRMj7r1lzMQvkU1l3E67Aa2hr9yJ2etYGxvBoYQDpuNdBOT_JhtiWGB5mKCDZREt1JksY_VeWugXUFfnWip_dXEPl9iBbg5KIywHSRhr_mvBlSw8ws6kTeWd_E=w662-h882-no?authuser=0",
                "size": "full",
                "aspectMode": "cover",
                "aspectRatio": "2:3",
                "gravity": "top"
              },
              {
                "type": "box",
                "layout": "horizontal",
                "contents": [
                  {
                    "type": "text",
                    "text": array[2][2],//公司名稱
                    "size": "33px",
                    "weight": "bold",
                    "align": "center"
                  }
                ],
                "position": "absolute",
                "offsetTop": "93px",
                "width": "100%"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "text",
                    "text": array[2][3],//成交價
                    "size": "18px",
                    "weight": "bold"
                  }
                ],
                "offsetTop": "152px",
                "offsetStart": "90px",
                "position": "absolute"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "text",
                    "text": array[2][4],//開盤價
                    "size": "18px",
                    "weight": "bold"
                  }
                ],
                "offsetTop": "190px",
                "offsetStart": "90px",
                "position": "absolute"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "text",
                    "text": array[2][5],//最高價
                    "size": "18px",
                    "weight": "bold"
                  }
                ],
                "offsetTop": "230px",
                "offsetStart": "90px",
                "position": "absolute"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "text",
                    "text": array[2][6],//最低價
                    "size": "18px",
                    "weight": "bold"
                  }
                ],
                "offsetTop": "268px",
                "offsetStart": "90px",
                "position": "absolute"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "text",
                    "text": array[2][7],//均價
                    "size": "18px",
                    "weight": "bold"
                  }
                ],
                "offsetTop": "308px",
                "offsetStart": "90px",
                "position": "absolute"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "text",
                    "text": array[2][8],//昨收
                    "size": "18px",
                    "weight": "bold"
                  }
                ],
                "offsetTop": "152px",
                "offsetStart": "205px",
                "position": "absolute"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "text",
                    "text": array[2][9],//漲跌幅
                    "size": "18px",
                    "weight": "bold",
                    "color": check_color(array[2][4], array[2][3])
                  }
                ],
                "offsetTop": "192px",
                "offsetStart": "225px",
                "position": "absolute"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "text",
                    "text": array[2][10],//漲跌
                    "size": "18px",
                    "weight": "bold",
                    "color": check_color(array[2][4], array[2][3])
                  }
                ],
                "offsetTop": "230px",
                "offsetStart": "205px",
                "position": "absolute"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "text",
                    "text": array[2][11],//總量
                    "size": "18px",
                    "weight": "bold"
                  }
                ],
                "offsetTop": "268px",
                "offsetStart": "205px",
                "position": "absolute"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "text",
                    "text": array[2][12],//振幅
                    "size": "18px",
                    "weight": "bold"
                  }
                ],
                "offsetTop": "308px",
                "offsetStart": "205px",
                "position": "absolute"
              },
              {
                "type": "box",
                "layout": "horizontal",
                "contents": [
                  {
                    "type": "text",
                    "text": array[2][2] + "新聞",
                    "size": "25px",
                    "weight": "bold",
                    "action": {
                      "type": "message",
                      "label": "action",
                      "text": array[2][2] + "新聞"//新聞
                    },
                    "align": "center"
                  }
                ],
                "offsetTop": "354px",
                "position": "absolute",
                "width": "100%"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "text",
                    "text": array[2][0],//日期
                    "size": "15px",
                    "weight": "bold"
                  }
                ],
                "offsetTop": "400px",
                "offsetStart": "200px",
                "position": "absolute"
              }
            ],
            "paddingAll": "0px"
          }
        }
      ]
    }
  }
  return text
}
function watch_list_4_item_t(array) {
  let text = {
    "type": "flex",
    "altText": "this is a flex message",
    "contents": {
      "type": "carousel",
      "contents": [
        {
          "type": "bubble",
          "body": {
            "type": "box",
            "layout": "vertical",
            "contents": [
              {
                "type": "image",
                "url": "https://lh3.googleusercontent.com/61cZkoXqIHFDRJM_6rSHW7lTqHEeAOcV1-E1Ri59s94tUlcMcYC4pZliiqp_pfwrM3lBfZrAck3JC-wtbHNcoRCJeLERyieXZ4qmmPUGtFEX48PEHQiwZCVDe9M_3E8R9h-2eWiGDtkQA5HLfimLsZH8e2vtrH0iYW5jg8IYWvG2MOILJRGwJtH9Q2oV-6dCBmShKozjVTb514qWLplfldxlxtS_Rbfhbm7IuEdBHtY76ZbT7c1HzV2vr4HaHjXgxc7nlS_y-PewqL5B4CDgAkKCHxQm-YeKnuQc3-rsLIqBWtv5sRK1I1fny7M74iFSf37VWJN0nm9jKY2bm-ago2w7v7PNEuN8YVFa4iAVWI1RcnJ-vveAL9478n9YQ63_uBB7JUjKkEe6FbaCpMLQJekJwDlMUO_aLcwNFnCCKDilQ7Eu7NmlxuwW7ockkA8KTijjgeH7PTFMp2bWdp-1ByQTGaoTYWMICP50rD2AahmsadMN19heZrVbyT46ujXgKy7mRuwXvrO6oj9Nbgb5WFtIiiYu3Nttuw47aMmbv-w8x9CQHKJnmzQzLej3Ceb1_v3t_tA7ek5AaAriU5UK46Lq2b4jGcRRMj7r1lzMQvkU1l3E67Aa2hr9yJ2etYGxvBoYQDpuNdBOT_JhtiWGB5mKCDZREt1JksY_VeWugXUFfnWip_dXEPl9iBbg5KIywHSRhr_mvBlSw8ws6kTeWd_E=w662-h882-no?authuser=0",
                "size": "full",
                "aspectMode": "cover",
                "aspectRatio": "2:3",
                "gravity": "top"
              },
              {
                "type": "box",
                "layout": "horizontal",
                "contents": [
                  {
                    "type": "text",
                    "text": array[0][2],//公司名稱
                    "size": "33px",
                    "weight": "bold",
                    "align": "center"
                  }
                ],
                "position": "absolute",
                "offsetTop": "93px",
                "width": "100%"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "text",
                    "text": array[0][3],//成交價
                    "size": "18px",
                    "weight": "bold"
                  }
                ],
                "offsetTop": "152px",
                "offsetStart": "90px",
                "position": "absolute"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "text",
                    "text": array[0][4],//開盤價
                    "size": "18px",
                    "weight": "bold"
                  }
                ],
                "offsetTop": "190px",
                "offsetStart": "90px",
                "position": "absolute"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "text",
                    "text": array[0][5],//最高價
                    "size": "18px",
                    "weight": "bold"
                  }
                ],
                "offsetTop": "230px",
                "offsetStart": "90px",
                "position": "absolute"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "text",
                    "text": array[0][6],//最低價
                    "size": "18px",
                    "weight": "bold"
                  }
                ],
                "offsetTop": "268px",
                "offsetStart": "90px",
                "position": "absolute"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "text",
                    "text": array[0][7],//均價
                    "size": "18px",
                    "weight": "bold"
                  }
                ],
                "offsetTop": "308px",
                "offsetStart": "90px",
                "position": "absolute"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "text",
                    "text": array[0][8],//昨收
                    "size": "18px",
                    "weight": "bold"
                  }
                ],
                "offsetTop": "152px",
                "offsetStart": "205px",
                "position": "absolute"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "text",
                    "text": array[0][9],//漲跌幅
                    "size": "18px",
                    "weight": "bold",
                    "color": check_color(array[0][4], array[0][3])
                  }
                ],
                "offsetTop": "192px",
                "offsetStart": "225px",
                "position": "absolute"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "text",
                    "text": array[0][10],//漲跌
                    "size": "18px",
                    "weight": "bold",
                    "color": check_color(array[0][4], array[0][3])
                  }
                ],
                "offsetTop": "230px",
                "offsetStart": "205px",
                "position": "absolute"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "text",
                    "text": array[0][11],//總量
                    "size": "18px",
                    "weight": "bold"
                  }
                ],
                "offsetTop": "268px",
                "offsetStart": "205px",
                "position": "absolute"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "text",
                    "text": array[0][12],//振幅
                    "size": "18px",
                    "weight": "bold"
                  }
                ],
                "offsetTop": "308px",
                "offsetStart": "205px",
                "position": "absolute"
              },
              {
                "type": "box",
                "layout": "horizontal",
                "contents": [
                  {
                    "type": "text",
                    "text": array[0][2] + "新聞",
                    "size": "25px",
                    "weight": "bold",
                    "action": {
                      "type": "message",
                      "label": "action",
                      "text": array[0][2] + "新聞"//新聞
                    },
                    "align": "center"
                  }
                ],
                "offsetTop": "354px",
                "position": "absolute",
                "width": "100%"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "text",
                    "text": array[0][0],//日期
                    "size": "15px",
                    "weight": "bold"
                  }
                ],
                "offsetTop": "400px",
                "offsetStart": "200px",
                "position": "absolute"
              }
            ],
            "paddingAll": "0px"
          }
        },
        {
          "type": "bubble",
          "body": {
            "type": "box",
            "layout": "vertical",
            "contents": [
              {
                "type": "image",
                "url": "https://lh3.googleusercontent.com/61cZkoXqIHFDRJM_6rSHW7lTqHEeAOcV1-E1Ri59s94tUlcMcYC4pZliiqp_pfwrM3lBfZrAck3JC-wtbHNcoRCJeLERyieXZ4qmmPUGtFEX48PEHQiwZCVDe9M_3E8R9h-2eWiGDtkQA5HLfimLsZH8e2vtrH0iYW5jg8IYWvG2MOILJRGwJtH9Q2oV-6dCBmShKozjVTb514qWLplfldxlxtS_Rbfhbm7IuEdBHtY76ZbT7c1HzV2vr4HaHjXgxc7nlS_y-PewqL5B4CDgAkKCHxQm-YeKnuQc3-rsLIqBWtv5sRK1I1fny7M74iFSf37VWJN0nm9jKY2bm-ago2w7v7PNEuN8YVFa4iAVWI1RcnJ-vveAL9478n9YQ63_uBB7JUjKkEe6FbaCpMLQJekJwDlMUO_aLcwNFnCCKDilQ7Eu7NmlxuwW7ockkA8KTijjgeH7PTFMp2bWdp-1ByQTGaoTYWMICP50rD2AahmsadMN19heZrVbyT46ujXgKy7mRuwXvrO6oj9Nbgb5WFtIiiYu3Nttuw47aMmbv-w8x9CQHKJnmzQzLej3Ceb1_v3t_tA7ek5AaAriU5UK46Lq2b4jGcRRMj7r1lzMQvkU1l3E67Aa2hr9yJ2etYGxvBoYQDpuNdBOT_JhtiWGB5mKCDZREt1JksY_VeWugXUFfnWip_dXEPl9iBbg5KIywHSRhr_mvBlSw8ws6kTeWd_E=w662-h882-no?authuser=0",
                "size": "full",
                "aspectMode": "cover",
                "aspectRatio": "2:3",
                "gravity": "top"
              },
              {
                "type": "box",
                "layout": "horizontal",
                "contents": [
                  {
                    "type": "text",
                    "text": array[1][2],//公司名稱
                    "size": "33px",
                    "weight": "bold",
                    "align": "center"
                  }
                ],
                "position": "absolute",
                "offsetTop": "93px",
                "width": "100%"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "text",
                    "text": array[1][3],//成交價
                    "size": "18px",
                    "weight": "bold"
                  }
                ],
                "offsetTop": "152px",
                "offsetStart": "90px",
                "position": "absolute"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "text",
                    "text": array[1][4],//開盤價
                    "size": "18px",
                    "weight": "bold"
                  }
                ],
                "offsetTop": "190px",
                "offsetStart": "90px",
                "position": "absolute"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "text",
                    "text": array[1][5],//最高價
                    "size": "18px",
                    "weight": "bold"
                  }
                ],
                "offsetTop": "230px",
                "offsetStart": "90px",
                "position": "absolute"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "text",
                    "text": array[1][6],//最低價
                    "size": "18px",
                    "weight": "bold"
                  }
                ],
                "offsetTop": "268px",
                "offsetStart": "90px",
                "position": "absolute"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "text",
                    "text": array[1][7],//均價
                    "size": "18px",
                    "weight": "bold"
                  }
                ],
                "offsetTop": "308px",
                "offsetStart": "90px",
                "position": "absolute"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "text",
                    "text": array[1][8],//昨收
                    "size": "18px",
                    "weight": "bold"
                  }
                ],
                "offsetTop": "152px",
                "offsetStart": "205px",
                "position": "absolute"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "text",
                    "text": array[1][9],//漲跌幅
                    "size": "18px",
                    "weight": "bold",
                    "color": check_color(array[1][4], array[1][3])
                  }
                ],
                "offsetTop": "192px",
                "offsetStart": "225px",
                "position": "absolute"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "text",
                    "text": array[1][10],//漲跌
                    "size": "18px",
                    "weight": "bold",
                    "color": check_color(array[1][4], array[1][3])
                  }
                ],
                "offsetTop": "230px",
                "offsetStart": "205px",
                "position": "absolute"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "text",
                    "text": array[1][11],//總量
                    "size": "18px",
                    "weight": "bold"
                  }
                ],
                "offsetTop": "268px",
                "offsetStart": "205px",
                "position": "absolute"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "text",
                    "text": array[1][12],//振幅
                    "size": "18px",
                    "weight": "bold"
                  }
                ],
                "offsetTop": "308px",
                "offsetStart": "205px",
                "position": "absolute"
              },
              {
                "type": "box",
                "layout": "horizontal",
                "contents": [
                  {
                    "type": "text",
                    "text": array[1][2] + "新聞",
                    "size": "25px",
                    "weight": "bold",
                    "action": {
                      "type": "message",
                      "label": "action",
                      "text": array[1][2] + "新聞"//新聞
                    },
                    "align": "center"
                  }
                ],
                "offsetTop": "354px",
                "position": "absolute",
                "width": "100%"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "text",
                    "text": array[1][0],//日期
                    "size": "15px",
                    "weight": "bold"
                  }
                ],
                "offsetTop": "400px",
                "offsetStart": "200px",
                "position": "absolute"
              }
            ],
            "paddingAll": "0px"
          }
        },
        {
          "type": "bubble",
          "body": {
            "type": "box",
            "layout": "vertical",
            "contents": [
              {
                "type": "image",
                "url": "https://lh3.googleusercontent.com/61cZkoXqIHFDRJM_6rSHW7lTqHEeAOcV1-E1Ri59s94tUlcMcYC4pZliiqp_pfwrM3lBfZrAck3JC-wtbHNcoRCJeLERyieXZ4qmmPUGtFEX48PEHQiwZCVDe9M_3E8R9h-2eWiGDtkQA5HLfimLsZH8e2vtrH0iYW5jg8IYWvG2MOILJRGwJtH9Q2oV-6dCBmShKozjVTb514qWLplfldxlxtS_Rbfhbm7IuEdBHtY76ZbT7c1HzV2vr4HaHjXgxc7nlS_y-PewqL5B4CDgAkKCHxQm-YeKnuQc3-rsLIqBWtv5sRK1I1fny7M74iFSf37VWJN0nm9jKY2bm-ago2w7v7PNEuN8YVFa4iAVWI1RcnJ-vveAL9478n9YQ63_uBB7JUjKkEe6FbaCpMLQJekJwDlMUO_aLcwNFnCCKDilQ7Eu7NmlxuwW7ockkA8KTijjgeH7PTFMp2bWdp-1ByQTGaoTYWMICP50rD2AahmsadMN19heZrVbyT46ujXgKy7mRuwXvrO6oj9Nbgb5WFtIiiYu3Nttuw47aMmbv-w8x9CQHKJnmzQzLej3Ceb1_v3t_tA7ek5AaAriU5UK46Lq2b4jGcRRMj7r1lzMQvkU1l3E67Aa2hr9yJ2etYGxvBoYQDpuNdBOT_JhtiWGB5mKCDZREt1JksY_VeWugXUFfnWip_dXEPl9iBbg5KIywHSRhr_mvBlSw8ws6kTeWd_E=w662-h882-no?authuser=0",
                "size": "full",
                "aspectMode": "cover",
                "aspectRatio": "2:3",
                "gravity": "top"
              },
              {
                "type": "box",
                "layout": "horizontal",
                "contents": [
                  {
                    "type": "text",
                    "text": array[2][2],//公司名稱
                    "size": "33px",
                    "weight": "bold",
                    "align": "center"
                  }
                ],
                "position": "absolute",
                "offsetTop": "93px",
                "width": "100%"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "text",
                    "text": array[2][3],//成交價
                    "size": "18px",
                    "weight": "bold"
                  }
                ],
                "offsetTop": "152px",
                "offsetStart": "90px",
                "position": "absolute"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "text",
                    "text": array[2][4],//開盤價
                    "size": "18px",
                    "weight": "bold"
                  }
                ],
                "offsetTop": "190px",
                "offsetStart": "90px",
                "position": "absolute"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "text",
                    "text": array[2][5],//最高價
                    "size": "18px",
                    "weight": "bold"
                  }
                ],
                "offsetTop": "230px",
                "offsetStart": "90px",
                "position": "absolute"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "text",
                    "text": array[2][6],//最低價
                    "size": "18px",
                    "weight": "bold"
                  }
                ],
                "offsetTop": "268px",
                "offsetStart": "90px",
                "position": "absolute"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "text",
                    "text": array[2][7],//均價
                    "size": "18px",
                    "weight": "bold"
                  }
                ],
                "offsetTop": "308px",
                "offsetStart": "90px",
                "position": "absolute"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "text",
                    "text": array[2][8],//昨收
                    "size": "18px",
                    "weight": "bold"
                  }
                ],
                "offsetTop": "152px",
                "offsetStart": "205px",
                "position": "absolute"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "text",
                    "text": array[2][9],//漲跌幅
                    "size": "18px",
                    "weight": "bold",
                    "color": check_color(array[2][4], array[2][3])
                  }
                ],
                "offsetTop": "192px",
                "offsetStart": "225px",
                "position": "absolute"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "text",
                    "text": array[2][10],//漲跌
                    "size": "18px",
                    "weight": "bold",
                    "color": check_color(array[2][4], array[2][3])
                  }
                ],
                "offsetTop": "230px",
                "offsetStart": "205px",
                "position": "absolute"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "text",
                    "text": array[2][11],//總量
                    "size": "18px",
                    "weight": "bold"
                  }
                ],
                "offsetTop": "268px",
                "offsetStart": "205px",
                "position": "absolute"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "text",
                    "text": array[2][12],//振幅
                    "size": "18px",
                    "weight": "bold"
                  }
                ],
                "offsetTop": "308px",
                "offsetStart": "205px",
                "position": "absolute"
              },
              {
                "type": "box",
                "layout": "horizontal",
                "contents": [
                  {
                    "type": "text",
                    "text": array[2][2] + "新聞",
                    "size": "25px",
                    "weight": "bold",
                    "action": {
                      "type": "message",
                      "label": "action",
                      "text": array[2][2] + "新聞"//新聞
                    },
                    "align": "center"
                  }
                ],
                "offsetTop": "354px",
                "position": "absolute",
                "width": "100%"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "text",
                    "text": array[2][0],//日期
                    "size": "15px",
                    "weight": "bold"
                  }
                ],
                "offsetTop": "400px",
                "offsetStart": "200px",
                "position": "absolute"
              }
            ],
            "paddingAll": "0px"
          }
        },
        {
          "type": "bubble",
          "body": {
            "type": "box",
            "layout": "vertical",
            "contents": [
              {
                "type": "image",
                "url": "https://lh3.googleusercontent.com/61cZkoXqIHFDRJM_6rSHW7lTqHEeAOcV1-E1Ri59s94tUlcMcYC4pZliiqp_pfwrM3lBfZrAck3JC-wtbHNcoRCJeLERyieXZ4qmmPUGtFEX48PEHQiwZCVDe9M_3E8R9h-2eWiGDtkQA5HLfimLsZH8e2vtrH0iYW5jg8IYWvG2MOILJRGwJtH9Q2oV-6dCBmShKozjVTb514qWLplfldxlxtS_Rbfhbm7IuEdBHtY76ZbT7c1HzV2vr4HaHjXgxc7nlS_y-PewqL5B4CDgAkKCHxQm-YeKnuQc3-rsLIqBWtv5sRK1I1fny7M74iFSf37VWJN0nm9jKY2bm-ago2w7v7PNEuN8YVFa4iAVWI1RcnJ-vveAL9478n9YQ63_uBB7JUjKkEe6FbaCpMLQJekJwDlMUO_aLcwNFnCCKDilQ7Eu7NmlxuwW7ockkA8KTijjgeH7PTFMp2bWdp-1ByQTGaoTYWMICP50rD2AahmsadMN19heZrVbyT46ujXgKy7mRuwXvrO6oj9Nbgb5WFtIiiYu3Nttuw47aMmbv-w8x9CQHKJnmzQzLej3Ceb1_v3t_tA7ek5AaAriU5UK46Lq2b4jGcRRMj7r1lzMQvkU1l3E67Aa2hr9yJ2etYGxvBoYQDpuNdBOT_JhtiWGB5mKCDZREt1JksY_VeWugXUFfnWip_dXEPl9iBbg5KIywHSRhr_mvBlSw8ws6kTeWd_E=w662-h882-no?authuser=0",
                "size": "full",
                "aspectMode": "cover",
                "aspectRatio": "2:3",
                "gravity": "top"
              },
              {
                "type": "box",
                "layout": "horizontal",
                "contents": [
                  {
                    "type": "text",
                    "text": array[3][2],//公司名稱
                    "size": "33px",
                    "weight": "bold",
                    "align": "center"
                  }
                ],
                "position": "absolute",
                "offsetTop": "93px",
                "width": "100%"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "text",
                    "text": array[3][3],//成交價
                    "size": "18px",
                    "weight": "bold"
                  }
                ],
                "offsetTop": "152px",
                "offsetStart": "90px",
                "position": "absolute"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "text",
                    "text": array[3][4],//開盤價
                    "size": "18px",
                    "weight": "bold"
                  }
                ],
                "offsetTop": "190px",
                "offsetStart": "90px",
                "position": "absolute"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "text",
                    "text": array[3][5],//最高價
                    "size": "18px",
                    "weight": "bold"
                  }
                ],
                "offsetTop": "230px",
                "offsetStart": "90px",
                "position": "absolute"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "text",
                    "text": array[3][6],//最低價
                    "size": "18px",
                    "weight": "bold"
                  }
                ],
                "offsetTop": "268px",
                "offsetStart": "90px",
                "position": "absolute"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "text",
                    "text": array[3][7],//均價
                    "size": "18px",
                    "weight": "bold"
                  }
                ],
                "offsetTop": "308px",
                "offsetStart": "90px",
                "position": "absolute"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "text",
                    "text": array[3][8],//昨收
                    "size": "18px",
                    "weight": "bold"
                  }
                ],
                "offsetTop": "152px",
                "offsetStart": "205px",
                "position": "absolute"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "text",
                    "text": array[3][9],//漲跌幅
                    "size": "18px",
                    "weight": "bold",
                    "color": check_color(array[3][4], array[3][3])
                  }
                ],
                "offsetTop": "192px",
                "offsetStart": "225px",
                "position": "absolute"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "text",
                    "text": array[3][10],//漲跌
                    "size": "18px",
                    "weight": "bold",
                    "color": check_color(array[3][4], array[3][3])
                  }
                ],
                "offsetTop": "230px",
                "offsetStart": "205px",
                "position": "absolute"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "text",
                    "text": array[3][11],//總量
                    "size": "18px",
                    "weight": "bold"
                  }
                ],
                "offsetTop": "268px",
                "offsetStart": "205px",
                "position": "absolute"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "text",
                    "text": array[3][12],//振幅
                    "size": "18px",
                    "weight": "bold"
                  }
                ],
                "offsetTop": "308px",
                "offsetStart": "205px",
                "position": "absolute"
              },
              {
                "type": "box",
                "layout": "horizontal",
                "contents": [
                  {
                    "type": "text",
                    "text": array[3][2] + "新聞",
                    "size": "25px",
                    "weight": "bold",
                    "action": {
                      "type": "message",
                      "label": "action",
                      "text": array[3][2] + "新聞"//新聞
                    },
                    "align": "center"
                  }
                ],
                "offsetTop": "354px",
                "position": "absolute",
                "width": "100%"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "text",
                    "text": array[3][0],//日期
                    "size": "15px",
                    "weight": "bold"
                  }
                ],
                "offsetTop": "400px",
                "offsetStart": "200px",
                "position": "absolute"
              }
            ],
            "paddingAll": "0px"
          }
        }
      ]
    }
  }
  return text
}
function watch_list_5_item_t(array) {
  let text = {
    "type": "flex",
    "altText": "this is a flex message",
    "contents": {
      "type": "carousel",
      "contents": [
        {
          "type": "bubble",
          "body": {
            "type": "box",
            "layout": "vertical",
            "contents": [
              {
                "type": "image",
                "url": "https://lh3.googleusercontent.com/61cZkoXqIHFDRJM_6rSHW7lTqHEeAOcV1-E1Ri59s94tUlcMcYC4pZliiqp_pfwrM3lBfZrAck3JC-wtbHNcoRCJeLERyieXZ4qmmPUGtFEX48PEHQiwZCVDe9M_3E8R9h-2eWiGDtkQA5HLfimLsZH8e2vtrH0iYW5jg8IYWvG2MOILJRGwJtH9Q2oV-6dCBmShKozjVTb514qWLplfldxlxtS_Rbfhbm7IuEdBHtY76ZbT7c1HzV2vr4HaHjXgxc7nlS_y-PewqL5B4CDgAkKCHxQm-YeKnuQc3-rsLIqBWtv5sRK1I1fny7M74iFSf37VWJN0nm9jKY2bm-ago2w7v7PNEuN8YVFa4iAVWI1RcnJ-vveAL9478n9YQ63_uBB7JUjKkEe6FbaCpMLQJekJwDlMUO_aLcwNFnCCKDilQ7Eu7NmlxuwW7ockkA8KTijjgeH7PTFMp2bWdp-1ByQTGaoTYWMICP50rD2AahmsadMN19heZrVbyT46ujXgKy7mRuwXvrO6oj9Nbgb5WFtIiiYu3Nttuw47aMmbv-w8x9CQHKJnmzQzLej3Ceb1_v3t_tA7ek5AaAriU5UK46Lq2b4jGcRRMj7r1lzMQvkU1l3E67Aa2hr9yJ2etYGxvBoYQDpuNdBOT_JhtiWGB5mKCDZREt1JksY_VeWugXUFfnWip_dXEPl9iBbg5KIywHSRhr_mvBlSw8ws6kTeWd_E=w662-h882-no?authuser=0",
                "size": "full",
                "aspectMode": "cover",
                "aspectRatio": "2:3",
                "gravity": "top"
              },
              {
                "type": "box",
                "layout": "horizontal",
                "contents": [
                  {
                    "type": "text",
                    "text": array[0][2],//公司名稱
                    "size": "33px",
                    "weight": "bold",
                    "align": "center"
                  }
                ],
                "position": "absolute",
                "offsetTop": "93px",
                "width": "100%"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "text",
                    "text": array[0][3],//成交價
                    "size": "18px",
                    "weight": "bold"
                  }
                ],
                "offsetTop": "152px",
                "offsetStart": "90px",
                "position": "absolute"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "text",
                    "text": array[0][4],//開盤價
                    "size": "18px",
                    "weight": "bold"
                  }
                ],
                "offsetTop": "190px",
                "offsetStart": "90px",
                "position": "absolute"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "text",
                    "text": array[0][5],//最高價
                    "size": "18px",
                    "weight": "bold"
                  }
                ],
                "offsetTop": "230px",
                "offsetStart": "90px",
                "position": "absolute"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "text",
                    "text": array[0][6],//最低價
                    "size": "18px",
                    "weight": "bold"
                  }
                ],
                "offsetTop": "268px",
                "offsetStart": "90px",
                "position": "absolute"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "text",
                    "text": array[0][7],//均價
                    "size": "18px",
                    "weight": "bold"
                  }
                ],
                "offsetTop": "308px",
                "offsetStart": "90px",
                "position": "absolute"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "text",
                    "text": array[0][8],//昨收
                    "size": "18px",
                    "weight": "bold"
                  }
                ],
                "offsetTop": "152px",
                "offsetStart": "205px",
                "position": "absolute"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "text",
                    "text": array[0][9],//漲跌幅
                    "size": "18px",
                    "weight": "bold",
                    "color": check_color(array[0][4], array[0][3])
                  }
                ],
                "offsetTop": "192px",
                "offsetStart": "225px",
                "position": "absolute"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "text",
                    "text": array[0][10],//漲跌
                    "size": "18px",
                    "weight": "bold",
                    "color": check_color(array[0][4], array[0][3])
                  }
                ],
                "offsetTop": "230px",
                "offsetStart": "205px",
                "position": "absolute"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "text",
                    "text": array[0][11],//總量
                    "size": "18px",
                    "weight": "bold"
                  }
                ],
                "offsetTop": "268px",
                "offsetStart": "205px",
                "position": "absolute"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "text",
                    "text": array[0][12],//振幅
                    "size": "18px",
                    "weight": "bold"
                  }
                ],
                "offsetTop": "308px",
                "offsetStart": "205px",
                "position": "absolute"
              },
              {
                "type": "box",
                "layout": "horizontal",
                "contents": [
                  {
                    "type": "text",
                    "text": array[0][2] + "新聞",
                    "size": "25px",
                    "weight": "bold",
                    "action": {
                      "type": "message",
                      "label": "action",
                      "text": array[0][2] + "新聞"//新聞
                    },
                    "align": "center"
                  }
                ],
                "offsetTop": "354px",
                "position": "absolute",
                "width": "100%"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "text",
                    "text": array[0][0],//日期
                    "size": "15px",
                    "weight": "bold"
                  }
                ],
                "offsetTop": "400px",
                "offsetStart": "200px",
                "position": "absolute"
              }
            ],
            "paddingAll": "0px"
          }
        },
        {
          "type": "bubble",
          "body": {
            "type": "box",
            "layout": "vertical",
            "contents": [
              {
                "type": "image",
                "url": "https://lh3.googleusercontent.com/61cZkoXqIHFDRJM_6rSHW7lTqHEeAOcV1-E1Ri59s94tUlcMcYC4pZliiqp_pfwrM3lBfZrAck3JC-wtbHNcoRCJeLERyieXZ4qmmPUGtFEX48PEHQiwZCVDe9M_3E8R9h-2eWiGDtkQA5HLfimLsZH8e2vtrH0iYW5jg8IYWvG2MOILJRGwJtH9Q2oV-6dCBmShKozjVTb514qWLplfldxlxtS_Rbfhbm7IuEdBHtY76ZbT7c1HzV2vr4HaHjXgxc7nlS_y-PewqL5B4CDgAkKCHxQm-YeKnuQc3-rsLIqBWtv5sRK1I1fny7M74iFSf37VWJN0nm9jKY2bm-ago2w7v7PNEuN8YVFa4iAVWI1RcnJ-vveAL9478n9YQ63_uBB7JUjKkEe6FbaCpMLQJekJwDlMUO_aLcwNFnCCKDilQ7Eu7NmlxuwW7ockkA8KTijjgeH7PTFMp2bWdp-1ByQTGaoTYWMICP50rD2AahmsadMN19heZrVbyT46ujXgKy7mRuwXvrO6oj9Nbgb5WFtIiiYu3Nttuw47aMmbv-w8x9CQHKJnmzQzLej3Ceb1_v3t_tA7ek5AaAriU5UK46Lq2b4jGcRRMj7r1lzMQvkU1l3E67Aa2hr9yJ2etYGxvBoYQDpuNdBOT_JhtiWGB5mKCDZREt1JksY_VeWugXUFfnWip_dXEPl9iBbg5KIywHSRhr_mvBlSw8ws6kTeWd_E=w662-h882-no?authuser=0",
                "size": "full",
                "aspectMode": "cover",
                "aspectRatio": "2:3",
                "gravity": "top"
              },
              {
                "type": "box",
                "layout": "horizontal",
                "contents": [
                  {
                    "type": "text",
                    "text": array[1][2],//公司名稱
                    "size": "33px",
                    "weight": "bold",
                    "align": "center"
                  }
                ],
                "position": "absolute",
                "offsetTop": "93px",
                "width": "100%"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "text",
                    "text": array[1][3],//成交價
                    "size": "18px",
                    "weight": "bold"
                  }
                ],
                "offsetTop": "152px",
                "offsetStart": "90px",
                "position": "absolute"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "text",
                    "text": array[1][4],//開盤價
                    "size": "18px",
                    "weight": "bold"
                  }
                ],
                "offsetTop": "190px",
                "offsetStart": "90px",
                "position": "absolute"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "text",
                    "text": array[1][5],//最高價
                    "size": "18px",
                    "weight": "bold"
                  }
                ],
                "offsetTop": "230px",
                "offsetStart": "90px",
                "position": "absolute"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "text",
                    "text": array[1][6],//最低價
                    "size": "18px",
                    "weight": "bold"
                  }
                ],
                "offsetTop": "268px",
                "offsetStart": "90px",
                "position": "absolute"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "text",
                    "text": array[1][7],//均價
                    "size": "18px",
                    "weight": "bold"
                  }
                ],
                "offsetTop": "308px",
                "offsetStart": "90px",
                "position": "absolute"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "text",
                    "text": array[1][8],//昨收
                    "size": "18px",
                    "weight": "bold"
                  }
                ],
                "offsetTop": "152px",
                "offsetStart": "205px",
                "position": "absolute"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "text",
                    "text": array[1][9],//漲跌幅
                    "size": "18px",
                    "weight": "bold",
                    "color": check_color(array[1][4], array[1][3])
                  }
                ],
                "offsetTop": "192px",
                "offsetStart": "225px",
                "position": "absolute"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "text",
                    "text": array[1][10],//漲跌
                    "size": "18px",
                    "weight": "bold",
                    "color": check_color(array[1][4], array[1][3])
                  }
                ],
                "offsetTop": "230px",
                "offsetStart": "205px",
                "position": "absolute"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "text",
                    "text": array[1][11],//總量
                    "size": "18px",
                    "weight": "bold"
                  }
                ],
                "offsetTop": "268px",
                "offsetStart": "205px",
                "position": "absolute"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "text",
                    "text": array[1][12],//振幅
                    "size": "18px",
                    "weight": "bold"
                  }
                ],
                "offsetTop": "308px",
                "offsetStart": "205px",
                "position": "absolute"
              },
              {
                "type": "box",
                "layout": "horizontal",
                "contents": [
                  {
                    "type": "text",
                    "text": array[1][2] + "新聞",
                    "size": "25px",
                    "weight": "bold",
                    "action": {
                      "type": "message",
                      "label": "action",
                      "text": array[1][2] + "新聞"//新聞
                    },
                    "align": "center"
                  }
                ],
                "offsetTop": "354px",
                "position": "absolute",
                "width": "100%"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "text",
                    "text": array[1][0],//日期
                    "size": "15px",
                    "weight": "bold"
                  }
                ],
                "offsetTop": "400px",
                "offsetStart": "200px",
                "position": "absolute"
              }
            ],
            "paddingAll": "0px"
          }
        },
        {
          "type": "bubble",
          "body": {
            "type": "box",
            "layout": "vertical",
            "contents": [
              {
                "type": "image",
                "url": "https://lh3.googleusercontent.com/61cZkoXqIHFDRJM_6rSHW7lTqHEeAOcV1-E1Ri59s94tUlcMcYC4pZliiqp_pfwrM3lBfZrAck3JC-wtbHNcoRCJeLERyieXZ4qmmPUGtFEX48PEHQiwZCVDe9M_3E8R9h-2eWiGDtkQA5HLfimLsZH8e2vtrH0iYW5jg8IYWvG2MOILJRGwJtH9Q2oV-6dCBmShKozjVTb514qWLplfldxlxtS_Rbfhbm7IuEdBHtY76ZbT7c1HzV2vr4HaHjXgxc7nlS_y-PewqL5B4CDgAkKCHxQm-YeKnuQc3-rsLIqBWtv5sRK1I1fny7M74iFSf37VWJN0nm9jKY2bm-ago2w7v7PNEuN8YVFa4iAVWI1RcnJ-vveAL9478n9YQ63_uBB7JUjKkEe6FbaCpMLQJekJwDlMUO_aLcwNFnCCKDilQ7Eu7NmlxuwW7ockkA8KTijjgeH7PTFMp2bWdp-1ByQTGaoTYWMICP50rD2AahmsadMN19heZrVbyT46ujXgKy7mRuwXvrO6oj9Nbgb5WFtIiiYu3Nttuw47aMmbv-w8x9CQHKJnmzQzLej3Ceb1_v3t_tA7ek5AaAriU5UK46Lq2b4jGcRRMj7r1lzMQvkU1l3E67Aa2hr9yJ2etYGxvBoYQDpuNdBOT_JhtiWGB5mKCDZREt1JksY_VeWugXUFfnWip_dXEPl9iBbg5KIywHSRhr_mvBlSw8ws6kTeWd_E=w662-h882-no?authuser=0",
                "size": "full",
                "aspectMode": "cover",
                "aspectRatio": "2:3",
                "gravity": "top"
              },
              {
                "type": "box",
                "layout": "horizontal",
                "contents": [
                  {
                    "type": "text",
                    "text": array[2][2],//公司名稱
                    "size": "33px",
                    "weight": "bold",
                    "align": "center"
                  }
                ],
                "position": "absolute",
                "offsetTop": "93px",
                "width": "100%"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "text",
                    "text": array[2][3],//成交價
                    "size": "18px",
                    "weight": "bold"
                  }
                ],
                "offsetTop": "152px",
                "offsetStart": "90px",
                "position": "absolute"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "text",
                    "text": array[2][4],//開盤價
                    "size": "18px",
                    "weight": "bold"
                  }
                ],
                "offsetTop": "190px",
                "offsetStart": "90px",
                "position": "absolute"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "text",
                    "text": array[2][5],//最高價
                    "size": "18px",
                    "weight": "bold"
                  }
                ],
                "offsetTop": "230px",
                "offsetStart": "90px",
                "position": "absolute"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "text",
                    "text": array[2][6],//最低價
                    "size": "18px",
                    "weight": "bold"
                  }
                ],
                "offsetTop": "268px",
                "offsetStart": "90px",
                "position": "absolute"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "text",
                    "text": array[2][7],//均價
                    "size": "18px",
                    "weight": "bold"
                  }
                ],
                "offsetTop": "308px",
                "offsetStart": "90px",
                "position": "absolute"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "text",
                    "text": array[2][8],//昨收
                    "size": "18px",
                    "weight": "bold"
                  }
                ],
                "offsetTop": "152px",
                "offsetStart": "205px",
                "position": "absolute"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "text",
                    "text": array[2][9],//漲跌幅
                    "size": "18px",
                    "weight": "bold",
                    "color": check_color(array[2][4], array[2][3])
                  }
                ],
                "offsetTop": "192px",
                "offsetStart": "225px",
                "position": "absolute"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "text",
                    "text": array[2][10],//漲跌
                    "size": "18px",
                    "weight": "bold",
                    "color": check_color(array[2][4], array[2][3])
                  }
                ],
                "offsetTop": "230px",
                "offsetStart": "205px",
                "position": "absolute"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "text",
                    "text": array[2][11],//總量
                    "size": "18px",
                    "weight": "bold"
                  }
                ],
                "offsetTop": "268px",
                "offsetStart": "205px",
                "position": "absolute"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "text",
                    "text": array[2][12],//振幅
                    "size": "18px",
                    "weight": "bold"
                  }
                ],
                "offsetTop": "308px",
                "offsetStart": "205px",
                "position": "absolute"
              },
              {
                "type": "box",
                "layout": "horizontal",
                "contents": [
                  {
                    "type": "text",
                    "text": array[2][2] + "新聞",
                    "size": "25px",
                    "weight": "bold",
                    "action": {
                      "type": "message",
                      "label": "action",
                      "text": array[2][2] + "新聞"//新聞
                    },
                    "align": "center"
                  }
                ],
                "offsetTop": "354px",
                "position": "absolute",
                "width": "100%"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "text",
                    "text": array[2][0],//日期
                    "size": "15px",
                    "weight": "bold"
                  }
                ],
                "offsetTop": "400px",
                "offsetStart": "200px",
                "position": "absolute"
              }
            ],
            "paddingAll": "0px"
          }
        },
        {
          "type": "bubble",
          "body": {
            "type": "box",
            "layout": "vertical",
            "contents": [
              {
                "type": "image",
                "url": "https://lh3.googleusercontent.com/61cZkoXqIHFDRJM_6rSHW7lTqHEeAOcV1-E1Ri59s94tUlcMcYC4pZliiqp_pfwrM3lBfZrAck3JC-wtbHNcoRCJeLERyieXZ4qmmPUGtFEX48PEHQiwZCVDe9M_3E8R9h-2eWiGDtkQA5HLfimLsZH8e2vtrH0iYW5jg8IYWvG2MOILJRGwJtH9Q2oV-6dCBmShKozjVTb514qWLplfldxlxtS_Rbfhbm7IuEdBHtY76ZbT7c1HzV2vr4HaHjXgxc7nlS_y-PewqL5B4CDgAkKCHxQm-YeKnuQc3-rsLIqBWtv5sRK1I1fny7M74iFSf37VWJN0nm9jKY2bm-ago2w7v7PNEuN8YVFa4iAVWI1RcnJ-vveAL9478n9YQ63_uBB7JUjKkEe6FbaCpMLQJekJwDlMUO_aLcwNFnCCKDilQ7Eu7NmlxuwW7ockkA8KTijjgeH7PTFMp2bWdp-1ByQTGaoTYWMICP50rD2AahmsadMN19heZrVbyT46ujXgKy7mRuwXvrO6oj9Nbgb5WFtIiiYu3Nttuw47aMmbv-w8x9CQHKJnmzQzLej3Ceb1_v3t_tA7ek5AaAriU5UK46Lq2b4jGcRRMj7r1lzMQvkU1l3E67Aa2hr9yJ2etYGxvBoYQDpuNdBOT_JhtiWGB5mKCDZREt1JksY_VeWugXUFfnWip_dXEPl9iBbg5KIywHSRhr_mvBlSw8ws6kTeWd_E=w662-h882-no?authuser=0",
                "size": "full",
                "aspectMode": "cover",
                "aspectRatio": "2:3",
                "gravity": "top"
              },
              {
                "type": "box",
                "layout": "horizontal",
                "contents": [
                  {
                    "type": "text",
                    "text": array[3][2],//公司名稱
                    "size": "33px",
                    "weight": "bold",
                    "align": "center"
                  }
                ],
                "position": "absolute",
                "offsetTop": "93px",
                "width": "100%"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "text",
                    "text": array[3][3],//成交價
                    "size": "18px",
                    "weight": "bold"
                  }
                ],
                "offsetTop": "152px",
                "offsetStart": "90px",
                "position": "absolute"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "text",
                    "text": array[3][4],//開盤價
                    "size": "18px",
                    "weight": "bold"
                  }
                ],
                "offsetTop": "190px",
                "offsetStart": "90px",
                "position": "absolute"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "text",
                    "text": array[3][5],//最高價
                    "size": "18px",
                    "weight": "bold"
                  }
                ],
                "offsetTop": "230px",
                "offsetStart": "90px",
                "position": "absolute"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "text",
                    "text": array[3][6],//最低價
                    "size": "18px",
                    "weight": "bold"
                  }
                ],
                "offsetTop": "268px",
                "offsetStart": "90px",
                "position": "absolute"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "text",
                    "text": array[3][7],//均價
                    "size": "18px",
                    "weight": "bold"
                  }
                ],
                "offsetTop": "308px",
                "offsetStart": "90px",
                "position": "absolute"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "text",
                    "text": array[3][8],//昨收
                    "size": "18px",
                    "weight": "bold"
                  }
                ],
                "offsetTop": "152px",
                "offsetStart": "205px",
                "position": "absolute"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "text",
                    "text": array[3][9],//漲跌幅
                    "size": "18px",
                    "weight": "bold",
                    "color": check_color(array[3][4], array[3][3])
                  }
                ],
                "offsetTop": "192px",
                "offsetStart": "225px",
                "position": "absolute"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "text",
                    "text": array[3][10],//漲跌
                    "size": "18px",
                    "weight": "bold",
                    "color": check_color(array[3][4], array[3][3])
                  }
                ],
                "offsetTop": "230px",
                "offsetStart": "205px",
                "position": "absolute"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "text",
                    "text": array[3][11],//總量
                    "size": "18px",
                    "weight": "bold"
                  }
                ],
                "offsetTop": "268px",
                "offsetStart": "205px",
                "position": "absolute"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "text",
                    "text": array[3][12],//振幅
                    "size": "18px",
                    "weight": "bold"
                  }
                ],
                "offsetTop": "308px",
                "offsetStart": "205px",
                "position": "absolute"
              },
              {
                "type": "box",
                "layout": "horizontal",
                "contents": [
                  {
                    "type": "text",
                    "text": array[3][2] + "新聞",
                    "size": "25px",
                    "weight": "bold",
                    "action": {
                      "type": "message",
                      "label": "action",
                      "text": array[3][2] + "新聞"//新聞
                    },
                    "align": "center"
                  }
                ],
                "offsetTop": "354px",
                "position": "absolute",
                "width": "100%"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "text",
                    "text": array[3][0],//日期
                    "size": "15px",
                    "weight": "bold"
                  }
                ],
                "offsetTop": "400px",
                "offsetStart": "200px",
                "position": "absolute"
              }
            ],
            "paddingAll": "0px"
          }
        },
        {
          "type": "bubble",
          "body": {
            "type": "box",
            "layout": "vertical",
            "contents": [
              {
                "type": "image",
                "url": "https://lh3.googleusercontent.com/61cZkoXqIHFDRJM_6rSHW7lTqHEeAOcV1-E1Ri59s94tUlcMcYC4pZliiqp_pfwrM3lBfZrAck3JC-wtbHNcoRCJeLERyieXZ4qmmPUGtFEX48PEHQiwZCVDe9M_3E8R9h-2eWiGDtkQA5HLfimLsZH8e2vtrH0iYW5jg8IYWvG2MOILJRGwJtH9Q2oV-6dCBmShKozjVTb514qWLplfldxlxtS_Rbfhbm7IuEdBHtY76ZbT7c1HzV2vr4HaHjXgxc7nlS_y-PewqL5B4CDgAkKCHxQm-YeKnuQc3-rsLIqBWtv5sRK1I1fny7M74iFSf37VWJN0nm9jKY2bm-ago2w7v7PNEuN8YVFa4iAVWI1RcnJ-vveAL9478n9YQ63_uBB7JUjKkEe6FbaCpMLQJekJwDlMUO_aLcwNFnCCKDilQ7Eu7NmlxuwW7ockkA8KTijjgeH7PTFMp2bWdp-1ByQTGaoTYWMICP50rD2AahmsadMN19heZrVbyT46ujXgKy7mRuwXvrO6oj9Nbgb5WFtIiiYu3Nttuw47aMmbv-w8x9CQHKJnmzQzLej3Ceb1_v3t_tA7ek5AaAriU5UK46Lq2b4jGcRRMj7r1lzMQvkU1l3E67Aa2hr9yJ2etYGxvBoYQDpuNdBOT_JhtiWGB5mKCDZREt1JksY_VeWugXUFfnWip_dXEPl9iBbg5KIywHSRhr_mvBlSw8ws6kTeWd_E=w662-h882-no?authuser=0",
                "size": "full",
                "aspectMode": "cover",
                "aspectRatio": "2:3",
                "gravity": "top"
              },
              {
                "type": "box",
                "layout": "horizontal",
                "contents": [
                  {
                    "type": "text",
                    "text": array[4][2],//公司名稱
                    "size": "33px",
                    "weight": "bold",
                    "align": "center"
                  }
                ],
                "position": "absolute",
                "offsetTop": "93px",
                "width": "100%"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "text",
                    "text": array[4][3],//成交價
                    "size": "18px",
                    "weight": "bold"
                  }
                ],
                "offsetTop": "152px",
                "offsetStart": "90px",
                "position": "absolute"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "text",
                    "text": array[4][4],//開盤價
                    "size": "18px",
                    "weight": "bold"
                  }
                ],
                "offsetTop": "190px",
                "offsetStart": "90px",
                "position": "absolute"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "text",
                    "text": array[4][5],//最高價
                    "size": "18px",
                    "weight": "bold"
                  }
                ],
                "offsetTop": "230px",
                "offsetStart": "90px",
                "position": "absolute"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "text",
                    "text": array[4][6],//最低價
                    "size": "18px",
                    "weight": "bold"
                  }
                ],
                "offsetTop": "268px",
                "offsetStart": "90px",
                "position": "absolute"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "text",
                    "text": array[4][7],//均價
                    "size": "18px",
                    "weight": "bold"
                  }
                ],
                "offsetTop": "308px",
                "offsetStart": "90px",
                "position": "absolute"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "text",
                    "text": array[4][8],//昨收
                    "size": "18px",
                    "weight": "bold"
                  }
                ],
                "offsetTop": "152px",
                "offsetStart": "205px",
                "position": "absolute"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "text",
                    "text": array[4][9],//漲跌幅
                    "size": "18px",
                    "weight": "bold",
                    "color": check_color(array[4][4], array[4][3])
                  }
                ],
                "offsetTop": "192px",
                "offsetStart": "225px",
                "position": "absolute"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "text",
                    "text": array[4][10],//漲跌
                    "size": "18px",
                    "weight": "bold",
                    "color": check_color(array[4][4], array[4][3])
                  }
                ],
                "offsetTop": "230px",
                "offsetStart": "205px",
                "position": "absolute"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "text",
                    "text": array[4][11],//總量
                    "size": "18px",
                    "weight": "bold"
                  }
                ],
                "offsetTop": "268px",
                "offsetStart": "205px",
                "position": "absolute"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "text",
                    "text": array[4][12],//振幅
                    "size": "18px",
                    "weight": "bold"
                  }
                ],
                "offsetTop": "308px",
                "offsetStart": "205px",
                "position": "absolute"
              },
              {
                "type": "box",
                "layout": "horizontal",
                "contents": [
                  {
                    "type": "text",
                    "text": array[4][2] + "新聞",
                    "size": "25px",
                    "weight": "bold",
                    "action": {
                      "type": "message",
                      "label": "action",
                      "text": array[4][2] + "新聞"//新聞
                    },
                    "align": "center"
                  }
                ],
                "offsetTop": "354px",
                "position": "absolute",
                "width": "100%"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "text",
                    "text": array[4][0],//日期
                    "size": "15px",
                    "weight": "bold"
                  }
                ],
                "offsetTop": "400px",
                "offsetStart": "200px",
                "position": "absolute"
              }
            ],
            "paddingAll": "0px"
          }
        }
      ]
    }
  }
  return text
}

module.exports.best_rise = function best_rise(array) {
  let text = {
    "type": "flex",
    "altText": "this is a flex message",
    "contents": {
      "type": "bubble",
      "body": {
        "type": "box",
        "layout": "vertical",
        "contents": [
          {
            "type": "image",
            "url": "https://lh3.googleusercontent.com/e6q4eh8tRtUEaDMJAoVGm4ejuQ6_ExcGsr1YKDcmlxKAncn9NcbdI3Ox9SoXt7IbnMW1D_4hf8AitWZHT8T0H2uMQagVAcPUnRdPRzBmpVFg3ekJTPMe1wNEAHNntVLK4xpZAKGRk6kRGwg5LmFqfnzwkMWQG-LVjwT_TN0xH1GvPpBIgvdRJGPdNzipw8cxRL9Pwi8kOoEtaPG9_7Sp1OXdXdek9IEms0GR7Jx54Phu5zUh72Nd4GF2qOjDnEUTkO20qc9RgPvSDmqxfPv6K8VBXtv5kfpTiO6NDDg0AQrpPqL-8rDVcaXQLo--ZeZILV2wDb0aWWPqa8dlNiOxNf7bXDyFblf48ZRATu06i7H8F9nGJjpSXK4PNMwTnD1TAvGFGjAFdG0crKtp1FhxAfXPuMEDtIvB8fK1Mg0hBH8WkIZ_UzFhF8TDnfvMDgz9lyFif7htuv3Qy2mAwKUZwOKlBNUdp4_lciM4MJNXvXy04JPLtNSJ_WeyxQXWGAO9OZdl_qhy5tlUPbYun42J-XUNerhENBSzuQ1tguDRGMg0rXK31iMDGxI0bjALo2XcxhjowBat_rm6CsBrtD5Zk67vjJMLPbAVmdtxVm_p3WSJKm6izt7tuVE96xNRoygV3dRcns97_hay0sPM30y7FIruTCsdZYpJ6bEtBf8_MtNgDeqMAJ5JsUdzvGcIpwTbBr9C4QxzqfSbV3kSnOFTlaKL=w672-h783-no?authuser=0",
            "size": "full",
            "aspectRatio": "5:6",
            "aspectMode": "cover",
            "gravity": "top"
          },
          {
            "type": "box",
            "layout": "vertical",
            "contents": [
              {
                "type": "text",
                "text": array[0][1],
                "size": "30px",
                "weight": "bold",
                "align": "start",
                "color": "#1597E5"
              }
            ],
            "position": "absolute",
            "width": "100%",
            "offsetTop": "123px",
            "offsetStart": "80px"
          },
          {
            "type": "box",
            "layout": "vertical",
            "contents": [
              {
                "type": "text",
                "text": array[0][2],
                "size": "25px",
                "weight": "bold",
                "color": "#FF0000"
              }
            ],
            "position": "absolute",
            "offsetTop": "126px",
            "offsetEnd": "60px"
          },
          {
            "type": "box",
            "layout": "vertical",
            "contents": [
              {
                "type": "text",
                "text": "  ",
                "size": "50px",
                "weight": "bold",
                "action": {
                  "type": "message",
                  "label": "action",
                  "text": "+"+array[0][0]
                }
              }
            ],
            "position": "absolute",
            "offsetTop": "108px",
            "offsetEnd": "26px"
          },
          {
            "type": "box",
            "layout": "vertical",
            "contents": [
              {
                "type": "text",
                "text": array[1][1],
                "size": "30px",
                "weight": "bold",
                "align": "start",
                "color": "#1597E5"
              }
            ],
            "position": "absolute",
            "width": "100%",
            "offsetTop": "195px",
            "offsetStart": "80px"
          },
          {
            "type": "box",
            "layout": "vertical",
            "contents": [
              {
                "type": "text",
                "text": array[1][2],
                "size": "25px",
                "weight": "bold",
                "color": "#FF0000"
              }
            ],
            "position": "absolute",
            "offsetTop": "200px",
            "offsetEnd": "60px"
          },
          {
            "type": "box",
            "layout": "vertical",
            "contents": [
              {
                "type": "text",
                "text": "  ",
                "size": "50px",
                "weight": "bold",
                "action": {
                  "type": "message",
                  "label": "action",
                  "text": "+"+array[1][0]
                }
              }
            ],
            "position": "absolute",
            "offsetTop": "180px",
            "offsetEnd": "26px"
          },
          {
            "type": "box",
            "layout": "vertical",
            "contents": [
              {
                "type": "text",
                "text": array[2][1],
                "size": "30px",
                "weight": "bold",
                "align": "start",
                "color": "#1597E5"
              }
            ],
            "position": "absolute",
            "width": "100%",
            "offsetTop": "270px",
            "offsetStart": "80px"
          },
          {
            "type": "box",
            "layout": "vertical",
            "contents": [
              {
                "type": "text",
                "text": array[2][2],
                "size": "25px",
                "weight": "bold",
                "color": "#FF0000"
              }
            ],
            "position": "absolute",
            "offsetTop": "273px",
            "offsetEnd": "60px"
          },
          {
            "type": "box",
            "layout": "vertical",
            "contents": [
              {
                "type": "text",
                "text": "  ",
                "size": "50px",
                "weight": "bold",
                "action": {
                  "type": "message",
                  "label": "action",
                  "text": "+"+array[2][0]
                }
              }
            ],
            "position": "absolute",
            "offsetTop": "254px",
            "offsetEnd": "26px"
          }
        ],
        "paddingAll": "0px"
      }
    }
  }
  return text
}

module.exports.best_down = function best_rise(array) {
  let text = {
    "type": "flex",
    "altText": "this is a flex message",
    "contents": {
      "type": "bubble",
      "body": {
        "type": "box",
        "layout": "vertical",
        "contents": [
          {
            "type": "image",
            "url": "https://lh3.googleusercontent.com/2qtQUyaD8mFYdM1g1PbWVPweCnxFQ57DYPq3ejZXMQgWACIjkWL5nm-KDnufGGdIS9NsxRmRkpOsNI0PHkOL3yBDQkHtnGOrXMSQv5LUcID8M7uQy3iw3tONP07491NZZuI2MpVXPQh2l2vNPJxo3H_2sf4JxiWzQSBu6SvlvRXgryhgN10Uv0ib7Qd-W4oxjbsrZ7InU6becHGxNgkVg9Lm9JzgnJPCTDcOW-vXId97FU1iyv-ca9Woj8J7w3wLbRg5mmtM5HpdxcMv53JuVXSZoo3evr9kEYJXo1Ro5UQfMJY6N79UPtDsBTiws18WAm1YNJx7vPbniNe4bc9p-bmO-UNb1z7m_xpmhTdeFk2Rpw11XwxS1Wmu4Y4pg0B4LF1J6J2rIcro5fGgp5jQiyi9s3ZM7I_8vfc_bIaI4PB_YW_F9BpeDnS0CYPYZE0VjCx3aWJ-9MscspE84Fsn31HcibQv0kAkWDev_4RfPQT8wi6W6WW6uZdsUrkCMXeyVry0QsWoTkr8Bg1XXJtyLfpDnLMcwDxhGGQKu1JBB9ljg3gs-XoGcEBN8B8P05kRK1w_yYwfHIPEqPQqRQ4EnpasBPImCmoyAUVeCqRDKt1-YLOAtXN2-D75XefHVqBLIJImVMWtNPG3c6Z8JViMxq9HShNJ2_CFlhltRfrRLI2QH7y2oOOdXWISPRW8LK05dMwJ2d5D-Xpf6zUSQH1Dg44U=w757-h882-no?authuser=0",
            "size": "full",
            "aspectRatio": "5:6",
            "aspectMode": "cover",
            "gravity": "top"
          },
          {
            "type": "box",
            "layout": "vertical",
            "contents": [
              {
                "type": "text",
                "text": array[0][1],
                "size": "30px",
                "weight": "bold",
                "align": "start",
                "color": "#1597E5"
              }
            ],
            "position": "absolute",
            "width": "100%",
            "offsetTop": "123px",
            "offsetStart": "80px"
          },
          {
            "type": "box",
            "layout": "vertical",
            "contents": [
              {
                "type": "text",
                "text": array[0][2],
                "size": "25px",
                "weight": "bold",
                "color": "#34BE82"
              }
            ],
            "position": "absolute",
            "offsetTop": "126px",
            "offsetEnd": "60px"
          },
          {
            "type": "box",
            "layout": "vertical",
            "contents": [
              {
                "type": "text",
                "text": "  ",
                "size": "50px",
                "weight": "bold",
                "action": {
                  "type": "message",
                  "label": "action",
                  "text": "+"+array[0][0]
                }
              }
            ],
            "position": "absolute",
            "offsetTop": "108px",
            "offsetEnd": "26px"
          },
          {
            "type": "box",
            "layout": "vertical",
            "contents": [
              {
                "type": "text",
                "text": array[1][1],
                "size": "30px",
                "weight": "bold",
                "align": "start",
                "color": "#1597E5"
              }
            ],
            "position": "absolute",
            "width": "100%",
            "offsetTop": "195px",
            "offsetStart": "80px"
          },
          {
            "type": "box",
            "layout": "vertical",
            "contents": [
              {
                "type": "text",
                "text": array[1][2],
                "size": "25px",
                "weight": "bold",
                "color": "#34BE82"
              }
            ],
            "position": "absolute",
            "offsetTop": "200px",
            "offsetEnd": "60px"
          },
          {
            "type": "box",
            "layout": "vertical",
            "contents": [
              {
                "type": "text",
                "text": "  ",
                "size": "50px",
                "weight": "bold",
                "action": {
                  "type": "message",
                  "label": "action",
                  "text": "+"+array[1][0]
                }
              }
            ],
            "position": "absolute",
            "offsetTop": "180px",
            "offsetEnd": "26px"
          },
          {
            "type": "box",
            "layout": "vertical",
            "contents": [
              {
                "type": "text",
                "text": array[2][1],
                "size": "30px",
                "weight": "bold",
                "align": "start",
                "color": "#1597E5"
              }
            ],
            "position": "absolute",
            "width": "100%",
            "offsetTop": "270px",
            "offsetStart": "80px"
          },
          {
            "type": "box",
            "layout": "vertical",
            "contents": [
              {
                "type": "text",
                "text": array[2][2],
                "size": "25px",
                "weight": "bold",
                "color": "#34BE82"
              }
            ],
            "position": "absolute",
            "offsetTop": "273px",
            "offsetEnd": "60px"
          },
          {
            "type": "box",
            "layout": "vertical",
            "contents": [
              {
                "type": "text",
                "text": "  ",
                "size": "50px",
                "weight": "bold",
                "action": {
                  "type": "message",
                  "label": "action",
                  "text": "+"+array[2][0]
                }
              }
            ],
            "position": "absolute",
            "offsetTop": "254px",
            "offsetEnd": "26px"
          }
        ],
        "paddingAll": "0px"
      }
    }
  }
  return text
}


