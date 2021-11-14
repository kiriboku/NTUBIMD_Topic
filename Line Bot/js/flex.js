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
        "url": "https://i.imgur.com/3s4U6k8.png",
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
//台股新聞
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
        "url": "https://i.imgur.com/R3vB4e5.png",
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
//房產新聞
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
        "url": "https://i.imgur.com/WsvyqUI.png",
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
//頭條新聞
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
        "url": "https://i.imgur.com/hb10eqj.png",
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
//外匯新聞
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
        "url": "https://i.imgur.com/GU7Dyq2.png",
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
//期貨新聞
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
        "url": "https://i.imgur.com/vlm3joT.png",
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
//理財新聞
module.exports.flex_news_stock = function flex_news_stock(array) {
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
            "url": "https://i.imgur.com/6Qq1Vvi.png",
            "size": "full",
            "aspectRatio": "23:13",
            "aspectMode": "cover"
          },
          {
            "type": "box",
            "layout": "vertical",
            "contents": [
              {
                "type": "text",
                "text": array[3],
                "size": "20px",
                "weight": "bold",
                "align": "center"
              }
            ],
            "position": "absolute",
            "offsetTop": "110px",
            "offsetStart": "130px",
            "width": "80px"
          }
        ],
        "paddingAll": "0px"
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
            "style": "link",
            "height": "sm",
            "action": {
              "type": "uri",
              "label": array[2][0],
              "uri": array[2][1]
            }
          }
        ],
        "flex": 0
      }
    }
  }
  return text
}
//個股新聞
function check_color(open, clos) {
  if (open < clos) {
    return "#FF0000"
  } else {
    return "#008000"
  }
}
//判斷關注清單股票漲幅顏色
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
//關注清單
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
                "url": "https://i.imgur.com/SM59Epm.png",
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
                "url": "https://i.imgur.com/SM59Epm.png",
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
                "url": "https://i.imgur.com/SM59Epm.png",
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
                "url": "https://i.imgur.com/SM59Epm.png",
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
                "url": "https://i.imgur.com/SM59Epm.png",
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
                "url": "https://i.imgur.com/SM59Epm.png",
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
                "url": "https://i.imgur.com/SM59Epm.png",
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
                "url": "https://i.imgur.com/SM59Epm.png",
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
                "url": "https://i.imgur.com/SM59Epm.png",
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
                "url": "https://i.imgur.com/SM59Epm.png",
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
                "url": "https://i.imgur.com/SM59Epm.png",
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
                "url": "https://i.imgur.com/SM59Epm.png",
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
                "url": "https://i.imgur.com/SM59Epm.png",
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
                "url": "https://i.imgur.com/SM59Epm.png",
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
                "url": "https://i.imgur.com/SM59Epm.png",
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
            "url": "https://i.imgur.com/U6TTkTM.png",
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
//股票漲幅最大
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
            "url": "https://i.imgur.com/uBCzI3b.png",
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
//股票跌幅最大

module.exports.Dividend_policy = function Dividend_policy(array) {
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
            "url": "https://lh3.googleusercontent.com/riYz5qUiF53E6pgtrxlvI695JrRtFnPRz8UO8fvd7worvdVEeN4ZKl8k9IpMWW2W_n6QBzDRre0krBJZZg0EpTOyZ_--Qx2W7N1h4kA1_BpdwWYMQmS6hTbjBVFDE6Z9QRGQhY8nC5sO6zs4q93Di1WluTGpMDAPJDo0EdXw5Bx-zTMqHPECADOzL6kf0tdxF-QN8Q4y-Q6rgKGPWyu6NdrWHau9REvdU43oezE0jUPwFJz9tk95BU7JxbPtbHig7jXuuz23sqeJju5_Fkig3Jsea18Zha-JkO7bIl8BjSnCmlXEf7S_YQDC6YBzFznookAgpb8rax29qF9g_0wygOXL2T7iN5mvo0bOFuzkTeTeIXA6doPAoTgBu1W0l5yfYcIqXbM70vTWXtjIqXhmS3Sw4A6fYEEbEiL_opurw0E3wy_hfXmsLIku5hxNl0tr6BkA-y8FmmwatrhpkhZLxTOcx6CUQjdFoaLgLh8gVDV_RJDAVTZla9gKAwT8tCXi89Ywn_9w0o6VCCssu8boBj9VDE5XRp7O0-uDG2tFikxYeCRLsA1jZEnYmTyDchRQFlIOfnceHcBcXNAl3yPc_wUQ9-a6yLKGcGIogvI2UaOqiu2AQqXVESMFDCMX_Fbe5QZ7dd3BHuyRjG-1HmdLkjWaLhMv3rJGCzNExud064DNg-g8RIsTZmbmtHwuqNy5QMFsxyS80SxfEg_A2xiVPLQN=w588-h783-no?authuser=0",
            "gravity": "top",
            "size": "full",
            "aspectMode": "cover",
            "aspectRatio": "3:4"
          },
          {
            "type": "box",
            "layout": "horizontal",
            "contents": [
              {
                "type": "text",
                "text": array[5]+" ( "+array[3]+" ) ",
                "size": "25px",
                "weight": "bold",
                "color": "#ffbd59"
              }
            ],
            "position": "absolute",
            "offsetTop": "60px",
            "width": "80%",
            "paddingStart": "10px"
          },
          {
            "type": "box",
            "layout": "vertical",
            "contents": [
              {
                "type": "text",
                "text": array[4],
                "size": "15px",
                "color": "#d9d9d9",
                "weight": "bold"
              }
            ],
            "position": "absolute",
            "offsetTop": "95px",
            "offsetStart": "150px"
          },
          {
            "type": "box",
            "layout": "horizontal",
            "contents": [
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "text",
                    "text": array[0][0],
                    "size": "12px",
                    "color": "#d9d9d9",
                    "weight": "bold",
                    "align": "center"
                  }
                ],
                "width": "70px"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "text",
                    "text": array[1][0],
                    "size": "12px",
                    "color": "#d9d9d9",
                    "weight": "bold",
                    "align": "center"
                  }
                ],
                "width": "75px"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "text",
                    "text": array[2][0],
                    "size": "12px",
                    "color": "#d9d9d9",
                    "weight": "bold",
                    "align": "center"
                  }
                ],
                "width": "70px"
              }
            ],
            "position": "absolute",
            "offsetTop": "130px",
            "offsetStart": "83px"
          },
          {
            "type": "box",
            "layout": "horizontal",
            "contents": [
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "text",
                    "text": String(array[0][1]),
                    "size": "12px",
                    "color": "#d9d9d9",
                    "weight": "bold",
                    "align": "center"
                  }
                ],
                "width": "60px"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "text",
                    "text": String(array[1][1]),
                    "size": "12px",
                    "color": "#d9d9d9",
                    "weight": "bold",
                    "align": "center"
                  }
                ],
                "width": "75px"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "text",
                    "text": String(array[2][1]),
                    "size": "12px",
                    "color": "#d9d9d9",
                    "weight": "bold",
                    "align": "center"
                  }
                ],
                "width": "70px"
              }
            ],
            "position": "absolute",
            "offsetTop": "155px",
            "offsetStart": "90px"
          },
          {
            "type": "box",
            "layout": "horizontal",
            "contents": [
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "text",
                    "text": array[0][2],
                    "size": "12px",
                    "color": "#d9d9d9",
                    "weight": "bold",
                    "align": "center"
                  }
                ],
                "width": "60px"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "text",
                    "text": array[1][2],
                    "size": "12px",
                    "color": "#d9d9d9",
                    "weight": "bold",
                    "align": "center"
                  }
                ],
                "width": "75px"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "text",
                    "text": array[2][2],
                    "size": "12px",
                    "color": "#d9d9d9",
                    "weight": "bold",
                    "align": "center"
                  }
                ],
                "width": "70px"
              }
            ],
            "position": "absolute",
            "offsetTop": "185px",
            "offsetStart": "90px"
          },
          {
            "type": "box",
            "layout": "horizontal",
            "contents": [
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "text",
                    "text": array[0][3],
                    "size": "12px",
                    "color": "#d9d9d9",
                    "weight": "bold",
                    "align": "center"
                  }
                ],
                "width": "60px"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "text",
                    "text": array[1][3],
                    "size": "12px",
                    "color": "#d9d9d9",
                    "weight": "bold",
                    "align": "center"
                  }
                ],
                "width": "75px"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "text",
                    "text": array[2][3],
                    "size": "12px",
                    "color": "#d9d9d9",
                    "weight": "bold",
                    "align": "center"
                  }
                ],
                "width": "70px"
              }
            ],
            "position": "absolute",
            "offsetTop": "213px",
            "offsetStart": "90px"
          },
          {
            "type": "box",
            "layout": "horizontal",
            "contents": [
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "text",
                    "text": array[0][4],
                    "size": "12px",
                    "color": "#d9d9d9",
                    "weight": "bold",
                    "align": "center"
                  }
                ],
                "width": "60px"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "text",
                    "text": array[1][4],
                    "size": "12px",
                    "color": "#d9d9d9",
                    "weight": "bold",
                    "align": "center"
                  }
                ],
                "width": "75px"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "text",
                    "text": array[2][4],
                    "size": "12px",
                    "color": "#d9d9d9",
                    "weight": "bold",
                    "align": "center"
                  }
                ],
                "width": "70px"
              }
            ],
            "position": "absolute",
            "offsetTop": "243px",
            "offsetStart": "90px"
          },
          {
            "type": "box",
            "layout": "horizontal",
            "contents": [
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "text",
                    "text": array[0][5],
                    "size": "12px",
                    "color": "#d9d9d9",
                    "weight": "bold",
                    "align": "center"
                  }
                ],
                "width": "60px"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "text",
                    "text": array[1][5],
                    "size": "12px",
                    "color": "#d9d9d9",
                    "weight": "bold",
                    "align": "center"
                  }
                ],
                "width": "75px"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "text",
                    "text": array[2][5],
                    "size": "12px",
                    "color": "#d9d9d9",
                    "weight": "bold",
                    "align": "center"
                  }
                ],
                "width": "70px"
              }
            ],
            "position": "absolute",
            "offsetTop": "268px",
            "offsetStart": "90px"
          },
          {
            "type": "box",
            "layout": "horizontal",
            "contents": [
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "text",
                    "text": array[0][6],
                    "size": "12px",
                    "color": "#d9d9d9",
                    "weight": "bold",
                    "align": "center"
                  }
                ],
                "width": "60px"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "text",
                    "text": array[1][6],
                    "size": "12px",
                    "color": "#d9d9d9",
                    "weight": "bold",
                    "align": "center"
                  }
                ],
                "width": "75px"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "text",
                    "text": array[2][6],
                    "size": "12px",
                    "color": "#d9d9d9",
                    "weight": "bold",
                    "align": "center"
                  }
                ],
                "width": "70px"
              }
            ],
            "position": "absolute",
            "offsetTop": "296px",
            "offsetStart": "90px"
          },
          {
            "type": "box",
            "layout": "horizontal",
            "contents": [
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "text",
                    "text": array[0][7],
                    "size": "12px",
                    "color": "#d9d9d9",
                    "weight": "bold",
                    "align": "center"
                  }
                ],
                "width": "60px"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "text",
                    "text": array[1][7],
                    "size": "12px",
                    "color": "#d9d9d9",
                    "weight": "bold",
                    "align": "center"
                  }
                ],
                "width": "75px"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "text",
                    "text": array[2][7],
                    "size": "12px",
                    "color": "#d9d9d9",
                    "weight": "bold",
                    "align": "center"
                  }
                ],
                "width": "70px"
              }
            ],
            "position": "absolute",
            "offsetTop": "323px",
            "offsetStart": "90px"
          }
        ],
        "paddingAll": "0px"
      }
    }
  }
  return text
}
//股利政策(待修正)




