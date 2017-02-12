import { InMemoryDbService } from 'angular-in-memory-web-api';
export class IngredientRecipeData implements InMemoryDbService {
  createDb() {
    let ingredients = [
      {
        'id': 396,
        'nom': 'Carotte Dorée',
        'description': 'La carotte dorée peut être mangée et restaure. Elle permet aussi et surtout de confectionner des potions de vision nocturne.',
        'quantity': 99,
        'css': {
          'backgroundPositionX': '-640',
          'backgroundPositionY': '-640'
        }
      },
      {
        'id': 378,
        'nom': 'Crème de Magma',
        'description': 'La crème de magma est un objet obtenu par l artisanat ou en tuant des cubes de magma.',
        'quantity': 99,
        'css': {
          'backgroundPositionX': '-672',
          'backgroundPositionY': '-640'
        }
      },
      {
        'id': 414,
        'nom': 'Patte de Lapin',
        'description': 'La patte de lapin est un objet lâché par les lapins qui peut être utilisé pour concocter des potions de sauts.',
        'quantity': 99,
        'css': {
          'backgroundPositionX': '-800',
          'backgroundPositionY': '-640'
        }
      },
      {
        'id': 353,
        'nom': 'Sucre',
        'description': 'Le sucre est un objet fabriqué à partir de la canne à sucre ou pouvant être obtenu à la mort des sorcières.',
        'quantity': 99,
        'css': {
          'backgroundPositionX': '-512',
          'backgroundPositionY': '-832'
        }
      },
      {
        'id': 349,
        'nom': 'Poisson-Globe',
        'description': 'Le poisson-globe ou encore fugu est un objet qui peut être trouvé en pêchant. Consommé, il empoisonne sévèrement le joueur pendant une minute.',
        'quantity': 99,
        'css': {
          'backgroundPositionX': '-128',
          'backgroundPositionY': '-832'
        }
      },
      {
        'id': 382,
        'nom': 'Pastèque Scintillante',
        'description': 'La pastèque scintillante est un objet qui s obtient via l artisanat à partir d une tranche de pastèque et de pépites d or.',
        'quantity': 99,
        'css': {
          'backgroundPositionX': '-576',
          'backgroundPositionY': '-640'
        }
      },
      {
        'id': 375,
        'nom': 'Oeil d Araignée',
        'description': 'L œil d araignée est un aliment qui s obtient en tuant des araignées ou des sorcières. Consommé il restaure des points de saturation, mais empoisonne aussi le joueur.',
        'quantity': 99,
        'css': {
          'backgroundPositionX': '-832',
          'backgroundPositionY': '-640'
        }
      },
      {
        'id': 370,
        'nom': 'Larmes de Ghast',
        'description': 'Les larmes de Ghast sont des objets obtenus à la mort des Ghasts.',
        'quantity': 99,
        'css': {
          'backgroundPositionX': '-544',
          'backgroundPositionY': '-640'
        }
      },
      {
        'id': 377,
        'nom': 'Poudre de Blaze',
        'description': 'La poudre de Blaze est un objet qui s obtient à partir de bâtons de blaze.',
        'quantity': 99,
        'css': {
          'backgroundPositionX': '-416',
          'backgroundPositionY': '-640'
        }
      },
      {
        'id': 373,
        'nom': 'Potion étrange',
        'description': 'C est la base de toutes les potions primaires et des potions volatiles étranges.',
        'quantity': 99,
        'css': {
          'backgroundPositionX': '-832',
          'backgroundPositionY': '-1056'
        }
      }
    ];
    let recipes = [
      {
        'result': {
          'id': 373,
          'nom': 'Potion de vision nocturne',
          'description': "Éclaircit visuellement l'environnement et rend l'eau plus transparente.",
          'css': {
            'backgroundPositionX': '-28',
            'backgroundPositionY': '-1087'
          }
        },
        'ingredients': [
          {
            'id': 396,
          },
          {
            'id': 373
          }
        ]
      },
      {
        'result': {
          'id': 373,
          'nom': 'Potion de rapidité',
          'description': "Cette potion augmente votre vitesse de marche. ",
          'css': {
            'backgroundPositionX': '-189',
            'backgroundPositionY': '-1087'
          }
        },
        'ingredients': [
          {
            'id': 353,
          },
          {
            'id': 373
          }
        ]
      },
      {
        'result': {
          'id': 373,
          'nom': 'Potion de force',
          'description': "Cette potion augmente votre force dans les combats.",
          'css': {
            'backgroundPositionX': '-158',
            'backgroundPositionY': '-1087'
          }
        },
        'ingredients': [
          {
            'id': 377,
          },
          {
            'id': 373
          }
        ]
      },
      {
        'result': {
          'id': 373,
          'nom': 'Potion de soin',
          'description': "Cette potion redonne instantannement 2 coeurs de vie.",
          'css': {
            'backgroundPositionX': '-957',
            'backgroundPositionY': '-1054'
          }
        },
        'ingredients': [
          {
            'id': 382,
          },
          {
            'id': 373
          }
        ]
      },
      {
        'result': {
          'id': 373,
          'nom': 'Potion de saut',
          'description': "Cette potion augmente la hauteur de vos sauts.",
          'css': {
            'backgroundPositionX': '3',
            'backgroundPositionY': '-1087'
          }
        },
        'ingredients': [
          {
            'id': 414,
          },
          {
            'id': 373
          }
        ]
      },
      {
        'result': {
          'id': 373,
          'nom': 'Potion de régénération',
          'description': "Cette potion regénère votre vie.",
          'css': {
            'backgroundPositionX': '-93',
            'backgroundPositionY': '-1087'
          }
        },
        'ingredients': [
          {
            'id': 370,
          },
          {
            'id': 373
          }
        ]
      },
      {
        'result': {
          'id': 373,
          'nom': 'Potion de résistance au feu',
          'description': "Cette potion vous permet d'être immunisé contre la chaleur des flammes et de la lave !",
          'css': {
            'backgroundPositionX': '-893',
            'backgroundPositionY': '-1055'
          }
        },
        'ingredients': [
          {
            'id': 378,
          },
          {
            'id': 373
          }
        ]
      },
      {
        'result': {
          'id': 373,
          'nom': 'Potion de respiration aquatique',
          'description': "Cette potion permet de respirer sous l'eau pendant une longue periode.",
          'css': {
            'backgroundPositionX': '-61',
            'backgroundPositionY': '-1343'
          }
        },
        'ingredients': [
          {
            'id': 349,
          },
          {
            'id': 373
          }
        ]
      },
      {
        'result': {
          'id': 373,
          'nom': 'Potion de poison',
          'description': "Cette potion est un poison qui vous fait perdre peu à peu vos points de vie.",
          'css': {
            'backgroundPositionX': '-61',
            'backgroundPositionY': '-1087'
          }
        },
        'ingredients': [
          {
            'id': 375,
          },
          {
            'id': 373
          }
        ]
      }
    ];
    return {ingredients, recipes};
  }
}
