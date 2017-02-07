import { InMemoryDbService } from 'angular-in-memory-web-api';
export class IngredientData implements InMemoryDbService {
  createDb() {
    let ingredients = [
      {
        'id': 115,
        'nom': 'Verrues du Nether',
        'description': 'Les verrues du Nether sont des plantes poussant naturellement dans le Nether.',
        'quantity': 99,
        'css': {
          'background-position': '-704px -640px'
        }
      },
      {
        'id': 0,
        'nom': 'Carotte Dorée',
        'description': 'La carotte dorée peut être mangée et restaure. Elle permet aussi et surtout de confectionner des potions de vision nocturne.',
        'quantity': 99,
        'css': {
          'background-position': '-640px -640px'
        }
      },
      {
        'id': 378,
        'nom': 'Crème de Magma',
        'description': 'La crème de magma est un objet obtenu par l artisanat ou en tuant des cubes de magma.',
        'quantity': 99,
        'css': {
          'background-position': '-672px -640px'
        }
      },
      {
        'id': 414,
        'nom': 'Patte de Lapin',
        'description': 'La patte de lapin est un objet lâché par les lapins qui peut être utilisé pour concocter des potions de sauts.',
        'quantity': 99,
        'css': {
          'background-position': '-800px -640px'
        }
      },
      {
        'id': 353,
        'nom': 'Sucre',
        'description': 'Le sucre est un objet fabriqué à partir de la canne à sucre ou pouvant être obtenu à la mort des sorcières.',
        'quantity': 99,
        'css': {
          'background-position': '-512px -832px'
        }
      },
      {
        'id': 349,
        'nom': 'Poisson-Globe',
        'description': 'Le poisson-globe ou encore fugu est un objet qui peut être trouvé en pêchant. Consommé, il empoisonne sévèrement le joueur pendant une minute.',
        'quantity': 99,
        'css': {
          'background-position': '-128px -832px;'
        }
      },
      {
        'id': 382,
        'nom': 'Pastèque Scintillante',
        'description': 'La pastèque scintillante est un objet qui s obtient via l artisanat à partir d une tranche de pastèque et de pépites d or.',
        'quantity': 99,
        'css': {
          'background-position': '-576px -640px'
        }
      },
      {
        'id': 375,
        'nom': 'Oeil d Araignée',
        'description': 'L œil d araignée est un aliment qui s obtient en tuant des araignées ou des sorcières. Consommé il restaure des points de saturation, mais empoisonne aussi le joueur.',
        'quantity': 99,
        'css': {
          'background-position': '-832px -640px'
        }
      },
      {
        'id': 370,
        'nom': 'Larmes de Ghast',
        'description': 'Les larmes de Ghast sont des objets obtenus à la mort des Ghasts.',
        'quantity': 99,
        'css': {
          'background-position': '-544px -640px'
        }
      },
      {
        'id': 377,
        'nom': 'Poudre de Blaze',
        'description': 'La poudre de Blaze est un objet qui s obtient à partir de bâtons de blaze.',
        'quantity': 99,
        'css': {
          'background-position': '-416px -640px'
        }
      }
    ];
    return {ingredients};
  }
}
