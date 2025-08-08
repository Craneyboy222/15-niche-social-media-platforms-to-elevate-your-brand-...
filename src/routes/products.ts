import express, { Request, Response, NextFunction } from 'express';
import { body, param, validationResult } from 'express-validator';
import { verifyToken } from '../middleware/auth';
import { ProductService } from '../services/ProductService';
import { logger } from '../utils/logger';
import { Product } from '../types/Product';

const router = express.Router();

// Initialize product service
const productService = new ProductService();

// Middleware for error handling
const handleErrors = (req: Request, res: Response, next: NextFunction) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    logger.error('Validation errors: ', errors.array());
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

// Route to create a new product
router.post(
  '/',
  verifyToken,
  body('name').isString().notEmpty(),
  body('price').isFloat({ gt: 0 }),
  body('description').optional().isString(),
  handleErrors,
  async (req: Request, res: Response) => {
    try {
      const productData: Product = req.body;
      const newProduct = await productService.createProduct(productData);
      logger.info('Product created: ', newProduct);
      res.status(201).json(newProduct);
    } catch (error) {
      logger.error('Error creating product: ', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
);

// Route to get a product by ID
router.get(
  '/:id',
  verifyToken,
  param('id').isInt(),
  handleErrors,
  async (req: Request, res: Response) => {
    try {
      const productId = parseInt(req.params.id, 10);
      const product = await productService.getProductById(productId);
      if (!product) {
        logger.warn('Product not found: ', productId);
        return res.status(404).json({ error: 'Product not found' });
      }
      logger.info('Product retrieved: ', product);
      res.status(200).json(product);
    } catch (error) {
      logger.error('Error retrieving product: ', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
);

// Route to update a product
router.put(
  '/:id',
  verifyToken,
  param('id').isInt(),
  body('name').optional().isString().notEmpty(),
  body('price').optional().isFloat({ gt: 0 }),
  body('description').optional().isString(),
  handleErrors,
  async (req: Request, res: Response) => {
    try {
      const productId = parseInt(req.params.id, 10);
      const productData: Partial<Product> = req.body;
      const updatedProduct = await productService.updateProduct(productId, productData);
      if (!updatedProduct) {
        logger.warn('Product not found for update: ', productId);
        return res.status(404).json({ error: 'Product not found' });
      }
      logger.info('Product updated: ', updatedProduct);
      res.status(200).json(updatedProduct);
    } catch (error) {
      logger.error('Error updating product: ', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
);

// Route to delete a product
router.delete(
  '/:id',
  verifyToken,
  param('id').isInt(),
  handleErrors,
  async (req: Request, res: Response) => {
    try {
      const productId = parseInt(req.params.id, 10);
      const success = await productService.deleteProduct(productId);
      if (!success) {
        logger.warn('Product not found for deletion: ', productId);
        return res.status(404).json({ error: 'Product not found' });
      }
      logger.info('Product deleted: ', productId);
      res.status(204).send();
    } catch (error) {
      logger.error('Error deleting product: ', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
);

export default router;