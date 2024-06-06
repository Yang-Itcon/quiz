// 定义10份题库
const questionSets = [
    [
        {
            question: '1扑救电器火灾,你尽可能首先( )',
            options: [
                { id: 'A', text: '找寻适合的灭火器扑救'},
                { id: 'B', text: '将电源开关关掉'},
                { id: 'C', text: '迅速报告'}
            ],
            correct: 'B',
            type: 'single'
        },
        {
            question: '现场急救人员进入事故现场发现触电者，首先应( )',
            options: [
                { id: 'A', text: '进行口对口人工呼吸'},
                { id: 'B', text: '进行胸外心脏按压'},
                { id: 'C', text: '迅速使触电者脱离电源'},
                { id: 'D', text: '判断伤情'}
            ],
            correct: 'C',
            type: 'single'
        },
        {
            question: '发现有人触电后，应迅速( )',
            options: [
                { id: 'A', text: '将触电者拉离电源'},
                { id: 'B', text: '用手将触电者拉离电源'},
                { id: 'C', text: '立即切断电源'}
            ],
            correct: 'C',
            type: 'single'
        },
        {
            question: '发生机械伤害事故的直接原因是( )',
            options: [
                { id: 'A', text: '人的不安全行为'},
                { id: 'B', text: '物的不安全状态'},
                { id: 'C', text: '人的不安全行为和物的不安全状态'}
            ],
            correct: 'C',
            type: 'single'
        },
        {
            question: '以下哪些是安全措施？( )',
            options: [
                { id: 'A', text: '佩戴防护装备'},
                { id: 'B', text: '遵守操作规程'},
                { id: 'C', text: '安全培训'},
                { id: 'D', text: '忽视警告标志'}
            ],
            correct: ['A', 'B', 'C'],
            type: 'multiple'
        }
    ],
    [
        {
            question: '2电气设备使用中的安全要求是( )',
            options: [
                { id: 'A', text: '使用合格的电气设备'},
                { id: 'B', text: '私拉乱接电线'},
                { id: 'C', text: '在潮湿环境下使用电器'}
            ],
            correct: 'A',
            type: 'single'
        },
        {
            question: '电气设备着火时,应该首先( )',
            options: [
                { id: 'A', text: '用水扑灭'},
                { id: 'B', text: '立即切断电源'},
                { id: 'C', text: '大声呼救'}
            ],
            correct: 'B',
            type: 'single'
        },
        {
            question: '使用灭火器扑灭火灾时,应该( )',
            options: [
                { id: 'A', text: '对准火焰顶部喷射'},
                { id: 'B', text: '对准火焰根部喷射'},
                { id: 'C', text: '水平喷射'}
            ],
            correct: 'B',
            type: 'single'
        },
        {
            question: '火灾逃生时,应该( )',
            options: [
                { id: 'A', text: '乘坐电梯逃生'},
                { id: 'B', text: '从安全通道逃生'},
                { id: 'C', text: '返回火场取物'}
            ],
            correct: 'B',
            type: 'single'
        },
        {
            question: '在火灾现场，如何自我保护？( )',
            options: [
                { id: 'A', text: '用湿毛巾捂住口鼻'},
                { id: 'B', text: '弯腰低姿行走'},
                { id: 'C', text: '沿墙壁匍匐前进'},
                { id: 'D', text: '以上都是'}
            ],
            correct: ['A', 'B', 'C', 'D'],
            type: 'multiple'
        }
    ],
    [
        {
            question: '3在公共场所发现火灾，首先应该( )',
            options: [
                { id: 'A', text: '报警并组织疏散'},
                { id: 'B', text: '自己先逃生'},
                { id: 'C', text: '寻找灭火器灭火'}
            ],
            correct: 'A',
            type: 'single'
        },
        {
            question: '灭火时使用泡沫灭火器扑救( )',
            options: [
                { id: 'A', text: '电器火灾'},
                { id: 'B', text: '油类火灾'},
                { id: 'C', text: '金属火灾'}
            ],
            correct: 'B',
            type: 'single'
        },
        {
            question: '逃生时,应该( )',
            options: [
                { id: 'A', text: '尽量选择较高楼层避难'},
                { id: 'B', text: '沿着安全通道迅速撤离'},
                { id: 'C', text: '打开窗户呼吸新鲜空气'}
            ],
            correct: 'B',
            type: 'single'
        },
        {
            question: '发现火情后,应该( )',
            options: [
                { id: 'A', text: '立即报警'},
                { id: 'B', text: '查看火势发展情况再报警'},
                { id: 'C', text: '等他人报警'}
            ],
            correct: 'A',
            type: 'single'
        },
        {
            question: '灭火器使用的正确步骤是( )',
            options: [
                { id: 'A', text: '拔掉保险销'},
                { id: 'B', text: '对准火焰根部'},
                { id: 'C', text: '按压手柄'},
                { id: 'D', text: '上下摇晃灭火器'},
            ],
            correct: ['A', 'B', 'C'],
            type: 'multiple'
        }
    ],
    [
        {
            question: '4火灾发生时,应该( )',
            options: [
                { id: 'A', text: '保持镇静'},
                { id: 'B', text: '大声呼喊救命'},
                { id: 'C', text: '盲目逃跑'}
            ],
            correct: 'A',
            type: 'single'
        },
        {
            question: '火场逃生时,最好( )',
            options: [
                { id: 'A', text: '结伴而行'},
                { id: 'B', text: '单独行动'},
                { id: 'C', text: '等待救援'}
            ],
            correct: 'A',
            type: 'single'
        },
        {
            question: '逃生时,发现通道被烟雾封锁,应( )',
            options: [
                { id: 'A', text: '硬闯过去'},
                { id: 'B', text: '寻找其他通道'},
                { id: 'C', text: '原地等待'}
            ],
            correct: 'B',
            type: 'single'
        },
        {
            question: '发生火灾时,应该首先( )',
            options: [
                { id: 'A', text: '组织灭火'},
                { id: 'B', text: '拨打火警电话'},
                { id: 'C', text: '寻找安全出口'}
            ],
            correct: 'B',
            type: 'single'
        },
        {
            question: '以下哪些属于火灾逃生自救措施？( )',
            options: [
                { id: 'A', text: '用湿毛巾捂住口鼻'},
                { id: 'B', text: '弯腰低姿行走'},
                { id: 'C', text: '沿着安全通道迅速撤离'},
                { id: 'D', text: '以上都是'}
            ],
            correct: ['A', 'B', 'C', 'D'],
            type: 'multiple'
        }
    ],
];

export const questions = questionSets;
