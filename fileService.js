import * as uuid from 'uuid'
import * as path from 'path'

class FileServise {
   saveFile(file) {
      try {
         const fileName = uuid.v4() + '.jpg'
         const filePath = path.resolve('static', fileName)
         file.mv(filePath)
         return fileName
      } catch (err) {
         console.log(err)
      }
   }
}

export default new FileServise